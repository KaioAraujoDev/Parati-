import React from 'react';
import {View,Text,Image} from 'react-native';

import Hospedagem1 from '../../assets/Hospedagens/hospedagem01.png';
import Hospedagem2 from '../../assets/Hospedagens/hospedagem02.png';
import Hospedagem3 from '../../assets/Hospedagens/hospedagem03.png';

import estilo from './estilo';

export default function Hospedagens(){
    return(
        <View style={estilo.container}>
            <Text style={estilo.tituloMain}>Pousadas e Hotéis em Paraty</Text>
            <Text style={estilo.descricao}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>
            
            <View style={estilo.card}>
                <Image source={Hospedagem1} style={estilo.imagem}/>
                <Text style={estilo.titulo}>Pousada Missanga</Text>  
                <Text style={estilo.info}>Valor médio: R$ 350,00
                Localização: Próx. à Av. Roberto Silveira</Text>  
            </View>
            <View style={estilo.card}>
                <Image source={Hospedagem2} style={estilo.imagem}/>
                <Text style={estilo.titulo}>Pousada Morro do Forte</Text>  
                <Text style={estilo.info}>Valor médio: R$ 450,00
Localização: Próximo à Praia - Pontal</Text>  
            </View>
            <View style={estilo.card}>
                <Image source={Hospedagem3} style={estilo.imagem}/>
                <Text style={estilo.titulo}>Pousada Porto Imperial</Text>  
                <Text style={estilo.info}>Valor médio: R$ 550,00
Localização: Centro Histórico</Text>  
            </View>
        </View>
    )
}