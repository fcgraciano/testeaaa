import {View, StyleSheet, Text, Image } from 'react-native'

export default function Lanche({img,preco}){
  return (
    <View style={css.produto}>
          <Image style={css.imagemLanche} source={img} />
          <Text style={css.valor}>R$ {preco}</Text>
        
    </View>
  )
}
const css = StyleSheet.create({
  imagemLanche:{
        height:50,
        width:50,
    } ,
     produto:{
      backgroundColor:'#eee',
      width:'30%',
      height:70,
      margin:5,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center'

    } ,
     valor:{
      fontSize:11,
    }, 
})