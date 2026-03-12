import { StyleSheet, Text, View, Image } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

import TelaIFood from './TelaIfood'
import TelaProdutos from './TelaProdutos'
import TelaLogin from './TelaLogin'
import TelaInicial from './TelaInicial'
import TelaCep from './TelaCep'
export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="CEP"> 
            <Drawer.Screen name="Home" component={TelaInicial}/>
            <Drawer.Screen name="Produtos" component={TelaProdutos}/>
            <Drawer.Screen name="Login" component={TelaLogin}/>
            <Drawer.Screen name="IFood" component={TelaIFood}/>
            <Drawer.Screen name="CEP" component={TelaCep}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}


