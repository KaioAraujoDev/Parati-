import React from 'react';
import { View, Text , Button ,Image } from 'react-native';

import Parati from '../../assets/Home/01.png';
import estilo from './estilo.js';


export default function Home(props){
    return(
        <View style={estilo.container}>
            <View style={estilo.card}>
                <Text style={estilo.titulo}>Paraty</Text>
                <Text style={estilo.info}>Saiba o que visitar em paraty.</Text>
                <Image source={Parati} style={estilo.imagem}/>
                <View style={estilo.divButton}>
                     <Button title="VER RESTAURANTES" onPress={()=>{props.navigation.navigate('Restaurantes')}} color='#372d00'/>
                </View>
                <View style={estilo.divButton}>
                    <Button title="VER PASSEIOS" onPress={()=>{props.navigation.navigate('Passeios')}} color='#372d00'/>
                </View>
                <View style={estilo.divButton}>
                    <Button title="VER HOSPEDAGEM" onPress={()=>{props.navigation.navigate('Hospedagens')}} color='#372d00'/>
                </View>
            </View>
        </View>
    )
}