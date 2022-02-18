import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './componentes/Home';
import Hospedagens from './componentes/Hospedagens';
import Passeios from './componentes/Passeios';
import Restaurantes from './componentes/Restaurantes';
const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={Home}/>
         <Stack.Screen name="Hospedagens" component={Hospedagens}/>
         <Stack.Screen name="Passeios" component={Passeios}/>
         <Stack.Screen name="Restaurantes" component={Restaurantes}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}