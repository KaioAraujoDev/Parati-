import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        backgroundColor:'#80E4E4',
    },  
    tituloMain:{
        fontSize:20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom:10,
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
        borderWidth:1,
        borderColor:'#979797',
        borderRadius:5,
    },
    titulo:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
    },
    imagem:{
        width:300,
        height:50,
        marginBottom:10,
    }
})

export default estilo;