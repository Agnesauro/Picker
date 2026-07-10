import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sobre(){
    return(
        <View style={styles.container}>
            <View style={styles.containerSobre}>
            <Text style={styles.textoSobre}>Nossa História: O Sabor da Tradição </Text>
            <Text style={styles.textoGeral}>A Pizzaria Fornatta nasceu de uma paixão antiga: o respeito pelo tempo, pelos bons ingredientes e pelas reuniões ao redor da mesa. 
              Inspirados nas antigas vilas italianas, onde o forno a lenha era o coração da casa e o ponto de encontro de famílias e amigos, decidimos trazer essa mesma atmosfera calorosa para perto de você.
              O nosso nome não é por acaso. Fornatta celebra o nosso maior orgulho: o forno de pedra, de onde saem pizzas com aquela massa perfeitamente aerada, bordas tostadas e o inconfundível aroma defumado que só a lenha legítima consegue dar.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center'

  },

  containerSobre: {
    backgroundColor: 'yellow', 
    padding: 25,
    borderRadius: 15,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },

  textoSobre: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FF003F',
    textAlign: 'center',
    marginBottom: 15,
  },

  textoGeral: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  }

});