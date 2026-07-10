import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function ComponentStorage() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cidade, setCidade] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    async function salvarUsuario() {
        try {
            const novoUsuario = {
                id: Date.now().toString(), // salvando id e convertendo para string
                nome,
                idade,
                cidade,
            };

            const dados = await
                AsyncStorage.getItem('usuarios');
            let lista = [];

            if (dados != null) {
                lista = JSON.parse(dados);
            }

            lista.push(novoUsuario);

            await AsyncStorage.setItem(
                "usuarios",
                JSON.stringify(lista)
            );

            // limpar formulário
            setNome(''); 
            setIdade('');
            setCidade('');

            alert("usuário salvo com sucesso!");
        } catch (error) {
            console.log("Erro: " + error);
        }
    }

    // listar usuarios

    async function carregarUsuarios() {
        try {
            const dados = await
                AsyncStorage.getItem('usuarios');

            if (dados != null) {
                setUsuarios(JSON.parse(dados));
            } else {
                setUsuarios([]);
            }
        } catch (error) {
            console.log('Erro: + ' + error)
        }
    }

    async function removerUsuario(id) {
        try {
            const novaLista = usuarios.filter(
                usuario => usuario.id !== id
            );

            await AsyncStorage.setItem(
                'usuarios',
                JSON.stringify(novaLista)
            );

            setUsuarios(novaLista)

        } catch (error) {
            console.log('Erro: ' + error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.textoLogin}>Cadastre-se! Não perca essa oportunidade 😄</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                        placeholderTextColor="#888"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Idade"
                        keyboardType="numeric"
                        value={idade}
                        onChangeText={setIdade}
                        placeholderTextColor="#888"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                        value={cidade}
                        onChangeText={setCidade}
                        placeholderTextColor="#888"
                    />

                    <TouchableOpacity style={styles.botao} onPress={salvarUsuario}>
                        <Text style={styles.textoBotao}>Salvar Usuário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={carregarUsuarios}>
                        <Text style={styles.textoBotao}>Exibir Usuários</Text>
                    </TouchableOpacity>

                    {usuarios.map((usuario) => (
                        <View key={usuario.id}>
                            <View>
                                <Text>Nome: {usuario.nome}</Text>
                                <Text>Idade: {usuario.idade}</Text>
                                <Text>Cidade: {usuario.cidade}</Text>
                            </View>

                            <TouchableOpacity style={styles.botaoDeletar} onPress={() => removerUsuario(usuario.id)}>
                                <Text style={styles.textoBotao}>Remover Usuário</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        backgroundColor: 'yellow',
        padding: 25,
        borderRadius: 15,
        width: '90%',
        maxWidth: 400,
        maxHeight: '85%', 
    },
    scrollContent: {
        alignItems: 'center',
        width: '100%',
        flexGrow: 1, 
        paddingBottom: 20,
    },
    textoLogin: {
        fontSize: 22,
        fontWeight: '900',
        color: '#FF003F',
        textAlign: 'center',
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    botao: {
        backgroundColor: '#FF003F',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginVertical: 6,
        width: '100%',
        alignItems: 'center',
    },
    botaoDeletar: {
        backgroundColor: '#000', 
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginVertical: 6,
        width: '100%',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },

})