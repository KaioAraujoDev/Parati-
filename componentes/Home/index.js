import React from 'react';
import { View, Text , Button ,Image } from 'react-native';

import Parati from '../../assets/Home/01.png';

export default function Home(props){
    return(
        <View>
            <View>
                <Text>Paraty</Text>
                <Text>Saiba o que visitar em paraty.</Text>
                <Image source={Parati}/>
                <View>
                     <Button title="VER RESTAURANTES" onPress={()=>{props.navigation.navigate('Restaurantes')}}/>
                </View>
                <View>
                    <Button title="VER PASSEIOS" onPress={()=>{props.navigation.navigate('Passeios')}}/>
                </View>
                <View>
                    <Button title="VER HOSPEDAGEM" onPress={()=>{props.navigation.navigate('Hospedagens')}}/>
                </View>
            </View>
        </View>
    )
}