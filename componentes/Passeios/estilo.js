import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        backgroundColor:'#97EF61',
    }, 
    tituloMain:{
        fontSize:20,
        fontWeight:'bold',
        alignItems: 'center',
        marginBottom:5,
    }, 
    descricao:{
        alignItems: 'center',
        marginBottom:20,
    },
    card:{
        backgroundColor:'#fff',
        width:320,
        padding:10,
        marginBottom:5,
        borderRadius:5,
        borderColor:'#979797',
        borderWidth:1,
    },
    titulo:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5,
    },
    imagem:{
        width:300,
        height:80,
    }
})

export default estilo;