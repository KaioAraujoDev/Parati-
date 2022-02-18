import React from 'react';
import {View, Text, Image} from 'react-native';

import Restaurante1 from '../../assets/Restaurantes/restaurante01.png';
import Restaurante2 from '../../assets/Restaurantes/restaurante02.png';
import Restaurante3 from '../../assets/Restaurantes/restaurante03.png';

import estilo from './estilo';

export default function Restaurantes(){
    return(
     <View style={estilo.container}>
         <Text style={estilo.tituloMain}>Bares e Restaurantes</Text>
         <Text style={estilo.descricao}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.</Text>
         <View style={estilo.card}>
            <Image source={Restaurante1} style={estilo.imagem}/>
            <Text style={estilo.titulo}>Armazén Mar</Text>
            <Text>Localização: Rod Rio-Santos</Text>
         </View>
         <View style={estilo.card}>
            <Image source={Restaurante2} style={estilo.imagem}/>
            <Text style={estilo.titulo}>Bendita's Restaurante</Text>
            <Text>
                  Localização: Centro Histórico SEREIA DO MAR PIZZA-BAR
            </Text>
         </View>
         <View style={estilo.card}>
            <Image source={Restaurante3} style={estilo.imagem}/>
                <Text style={estilo.titulo}>SEREIA DO MAR PIZZA-BAR</Text>
                <Text>
                  Localização: Praia do Jabaquara
                </Text>
         </View>
    </View>
    )
}