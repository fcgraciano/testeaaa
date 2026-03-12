import {View, StyleSheet, Image, Text} from 'react-native'

export default function Loja({imagem}){

  return(
     <View style={css.bolinha}>
          <Image
            style={css.logo_bolinha}
            source={imagem}
          />
     </View>
  )
}

const css = StyleSheet.create({
  bolinha:{
      backgroundColor:'#fff',
      borderRadius:75,
      width:75,
      height:75,
      justifyContent:'center',
      alignItems:'center',
    },
    logo_bolinha:{
      width:60,
      height:60,
    }
})