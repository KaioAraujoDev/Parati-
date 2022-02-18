import React from 'react';
import { View, Text ,Image} from 'react-native';

import Tirolesa from '../../assets/Passeios/passeio01.png';
import Rafting from '../../assets/Passeios/passeio02.png';
import Canoagem from '../../assets/Passeios/passeio03.png';

import estilo from './estilo';

export default function Passeios(){
    return(
        <View style={estilo.container}>
            <Text style={estilo.tituloMain}>Passeios em Paraty</Text>
            <Text style={estilo.descricao}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja os 3 exemplos:</Text>
            <View style={estilo.card}>
                <Text style={estilo.titulo}>Tirolesa</Text>
                <Image style={estilo.imagem} source={Tirolesa}/>
            </View>
            <View style={estilo.card}>
                <Text style={estilo.titulo}>Rafting</Text>
                <Image style={estilo.imagem} source={Rafting}/>
            </View>
            <View style={estilo.card}>
                <Text style={estilo.titulo}>Canoagem</Text>
                <Image style={estilo.imagem} source={Canoagem}/>
            </View>
        </View>
        
    )
}