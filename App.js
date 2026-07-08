import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home/Home';
import Sobre from './src/pages/Sobre/Sobre';
import Pedidos from './src/pages/Pedidos/Pedidos';
import Usuarios from './src/pages/Usuarios/Usuarios';
import ComponentStorage from './src/pages/Components/ComponentStorage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

console.log(localStorage);

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon:({color, size}) =>{
              return <Feather name='home' color={color} size={size}/>
            }
          }}
          />
          <Tab.Screen
          name='Sobre'
          component={Sobre}
          options={{
            tabBarIcon: ({color, size}) =>{
              return <Feather name='info' color={color} size={size}/>
            }
          }}
          />
          <Tab.Screen
          name='Pedidos'
          component={Pedidos}
          options={{
            tabBarIcon: ({color, size}) =>{
              return <Feather name='clipboard' color={color} size={size}/>
            }
          }}
          />
          <Tab.Screen
          name='Usuarios'
          component={Usuarios}
          options={{
            tabBarIcon: ({color, size}) =>{
              return <Feather name='log-in' color={color} size={size}/>
            }
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

});