import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#F6B554',
        padding:20,
    },
    tituloMain:{
        fontSize:20,
        alignItems:'center',
        fontWeight:'bold',
        marginBottom:5,
    },
    descricao:{
        textAlign: 'center',
        marginBottom:20,
    }, 
    card:{
        backgroundColor:'#fff',
        width:320,
        marginBottom:5,
        padding:10,
        borderRadius:5,
        borderColor:'#979797',
        borderWidth:1,
    },
    titulo:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
        
    },
    imagem:{
        width:300,
        height:80,
        marginBottom:5,
    }
})

export default estilo;