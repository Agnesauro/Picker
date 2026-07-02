import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { Picker } from 'react-native-web';

export default function ComponentPicker(){
    const imagensPizza = {
        calabresa: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/4ef71e576dd2c48bc6f075632240504b.webp?itok=GJauJyaW',
        portuguesa: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/2eb7ece4ae9a67b773aa138589e2031d.webp?itok=8rB5qKP-',
        bacon: 'https://www.seara.com.br/wp-content/uploads/2025/09/R0325-SL-pizza-de-bacon-fatiado-cebola-caramelizada-1200x675-1.webp',
        frango_catupiry: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/85edcfdb1dae604c2627a88c06fa0c85.webp?itok=GL3lIKtV',
        alho: ''
    }

    const [sabor, setSabor] = useState('')


    return(
        <View style ={styles.container}>
            <View style={styles.layout}>
            <Image
            source={require('../../assets/pizza67.png')} 
            style={{ width: 350, height: 400, resizeMode: 'contain' }}
            />
            <Text>Menu de Pizzas</Text>
            <Picker
                selectedValue={sabor}
                onValueChange={(itemValue, itemIndex) => setSabor(itemValue)}
            >
                <Picker.Item key={1} value='calabresa' label='Pizza de Calabresa'/>
                <Picker.Item key={2} value='portuguesa' label='Pizza Portuguesa'/>
                <Picker.Item key={3} value='bacon' label='Pizza de Bacon'/>
                <Picker.Item key={4} value='frango_catupiry' label='Pizza de Frango com Catupiry'/>
                <Picker.Item key={5} value='alho' label='Pizza de Alho'/>
                <Picker.Item key={6} value='mussarela' label='Pizza de Mussarela'/>
                <Picker.Item key={7} value='camarao' label='Pizza de Camarão'/>
                <Picker.Item key={8} value='marguerita' label='Pizza de Marguerita'/>
            </Picker>

            <Text>
            {sabor === '' ? 'Nenhum sabor selecionado'
            : `Sabor escolhido:  ${sabor}`}
            </Text>
            </View>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    layout: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
})