import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from 'react-native-web'; // Se estiver usando no celular, lembre-se de importar de '@react-native-picker/picker'

export default function Pedidos(){
    const imagensPizza = {
        calabresa: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/4ef71e576dd2c48bc6f075632240504b.webp?itok=GJauJyaW',
        portuguesa: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/2eb7ece4ae9a67b773aa138589e2031d.webp?itok=8rB5qKP-',
        bacon: 'https://www.seara.com.br/wp-content/uploads/2025/09/R0325-SL-pizza-de-bacon-fatiado-cebola-caramelizada-1200x675-1.webp',
        frango_catupiry: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/85edcfdb1dae604c2627a88c06fa0c85.webp?itok=GL3lIKtV',
        alho: 'https://mrteddypizza.com.br/wp-content/uploads/2024/03/Design-sem-nome-2024-03-21T014935.418.png',
        mussarela: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/fe1087b2f7b47b6a5bc8ad8269601a97.webp?itok=olj7rz2i',
        camarao: 'https://www.sabornamesa.com.br/media/k2/items/cache/08a4cf1e44f783c853b207a033a173b9_XL.webp',
        marguerita: 'https://s2-receitas.glbimg.com/BmkjA0L1Z3ciNldyhh8gYxrT_MQ=/1366x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2025/i/t/M0NAabSCKba8nzZy6wzw/pizza-margherita-receita.jpg'
    }

    const [sabor, setSabor] = useState('');
    const [listaSabores, setListaSabores] = useState([]); 

    async function salvarSabor() {
        if (sabor === '') {
            alert('Por favor, selecione um sabor antes de salvar.');
            return;
        }

        try {
            const novoSabor = {
                id: Date.now().toString(),
                sabor: sabor
            };

            const dados = await AsyncStorage.getItem('sabor');
            let lista = [];

            if (dados != null) {
                lista = JSON.parse(dados);
            }

            lista.push(novoSabor);

            await AsyncStorage.setItem('sabor', JSON.stringify(lista));

            setSabor(''); 
            alert('Sabor selecionado e salvo com sucesso!');
            
            
            setListaSabores(lista); 
        } catch (error) {
            console.log('Erro ao salvar: ' + error);
        }
    }

    async function exibirSabor() {
        try {
            const dados = await AsyncStorage.getItem('sabor');

            if (dados != null) {
                setListaSabores(JSON.parse(dados));
            } else {
                setListaSabores([]);
                alert('Nenhum sabor salvo ainda.');
            }
        } catch (error) {
            console.log('Erro ao exibir: ' + error);
        }
    }

    async function limparBanco() {
    await AsyncStorage.removeItem('sabor');
    setListaSabores([]);
    alert('Banco de dados limpo com sucesso!');
}

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.layout}>
             
                <Image
                    source={require('../../../assets/pedido.png')}
                    style={styles.logoPizzaria}
                />
                
                <Text style={styles.textoMenu}>Menu de Pizzas</Text>
                
                <Picker
                    selectedValue={sabor}
                    onValueChange={(itemValue) => setSabor(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item key={1} value='' label='Selecione um sabor...'/>
                    <Picker.Item key={2} value='calabresa' label='Pizza de Calabresa'/>
                    <Picker.Item key={3} value='portuguesa' label='Pizza Portuguesa'/>
                    <Picker.Item key={4} value='bacon' label='Pizza de Bacon'/>
                    <Picker.Item key={5} value='frango_catupiry' label='Pizza de Frango com Catupiry'/>
                    <Picker.Item key={6} value='alho' label='Pizza de Alho'/>
                    <Picker.Item key={7} value='mussarela' label='Pizza de Mussarela'/>
                    <Picker.Item key={8} value='camarao' label='Pizza de Camarão'/>
                    <Picker.Item key={9} value='marguerita' label='Pizza de Marguerita'/>
                </Picker>

                <Text style={styles.textoSabor}>
                    {sabor === '' ? 'Nenhum sabor selecionado' : `Sabor escolhido: ${sabor}`}
                </Text>
                
                {sabor !== '' && imagensPizza[sabor] && (
                    <Image
                        source={{ uri: imagensPizza[sabor] }}
                        style={styles.imagemPizzaSelecionada}
                    />
                )}

                <TouchableOpacity style={styles.botao} onPress={salvarSabor}>
                    <Text style={styles.textoBotao}>Salvar Sabor</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={exibirSabor}>
                    <Text style={styles.textoBotao}>Mostrar Sabores Selecionados</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, {backgroundColor: '#333'}]} onPress={limparBanco}>
                <Text style={styles.textoBotao}>Limpar Histórico</Text>
                </TouchableOpacity>


                {listaSabores.length > 0 && (
                    <View style={styles.containerLista}>
                        <Text style={styles.tituloLista}>Pedidos Salvos:</Text>
                        {listaSabores.map((item) => (
                            <Text key={item.id} style={styles.itemLista}>
                                • Pizza de {item.sabor.replace('_', ' ')}
                            </Text>
                        ))}
                    </View>
                )}
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    layout: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 15,
        width: '90%',
        maxWidth: 400,
        overflow: 'hidden', 
        borderWidth: 1,
        borderColor: '#e0e000', 
    },
    logoPizzaria: {
        width: 250, 
        height: 250, 
        resizeMode: 'contain',
        marginBottom: 0, 
    },
    textoMenu: {
        fontSize: 20, 
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -10, 
        marginBottom: 10,
    },
    picker: {
        width: '100%',
        height: 40,
        marginBottom: 10,
    },
    textoSabor: {
        fontSize: 14, 
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '500',
    },
    imagemPizzaSelecionada: {
        width: 180, 
        height: 180, 
        resizeMode: 'cover',
        borderRadius: 90, 
        marginTop: 5,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#fff', 
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
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    containerLista: {
        marginTop: 15,
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(255,255,255,0.6)',
        padding: 10,
        borderRadius: 8
    },
    tituloLista: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
        color: '#333'
    },
    itemLista: {
        fontSize: 14,
        color: '#333',
        textTransform: 'capitalize',
        marginVertical: 2
    }
});