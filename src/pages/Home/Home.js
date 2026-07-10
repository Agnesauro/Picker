import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.home}>
              <Image
               source={require('../../../assets/fornatta.jpg')}
              style={styles.imagemHome}
/>
                
                <Text style={styles.textoHome}>ATENÇÃO RIO DE JANEIRO!! 🔥🍕</Text>
                
                <Text style={styles.textoIntro}>
                    Na Fornatta, nós transformamos ingredientes simples em experiências extraordinárias. 
                    Combinamos a clássica tradição italiana com um toque de inovação urbana. 
                    Massas leves, bordas aeradas e recheios generosos que vão transformar a sua noite. 
                    Peça agora e sinta a diferença do fogo alto!
                </Text>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Sobre')}>
                    <Text style={styles.textoBotao}>Sobre Nós</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pedidos')}>
                    <Text style={styles.textoBotao}>Pedidos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    backgroundColor: 'yellow', 
    padding: 25,
    borderRadius: 15,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
  textoHome: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FF003F',
    textAlign: 'center',
    marginBottom: 15,
  },
  textoIntro: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
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
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },

  imagemHome: {
    width: 250, 
    height: 250, 
    resizeMode: 'contain',
    marginBottom: 0, 
  }
});