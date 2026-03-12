import {View, Image, Text, StyleSheet, Pressable} from 'react-native'

export default function TelaProdutos(){
  return(
    <View style={css.container}>
        <View style={css.menu}>
            <View><Text style={css.titulo} >Lista de Produtos</Text></View>
            <Image style={css.imagem} source={require('./Imagens/lupa.png')} />
        </View>
        <View style={css.lista}>

            <View style={css.produto}>
              <Image style={css.imagemProduto} source={require('./Imagens/lanche.jpg')} />
              <Text>X Tudo</Text>
              <Text>R$ 50,00</Text>
            </View>

            <View style={css.produto}>
              <Image style={css.imagemProduto} source={require('./Imagens/lanche.jpg')} />
              <Text>X Super Tudo</Text>
              <Text>R$ 140,00</Text>
            </View>

             <View style={css.produto}>
              <Image style={css.imagemProduto} source={require('./Imagens/lanche.jpg')} />
              <Text>X Hiper Tudo</Text>
              <Text>R$ 200,00</Text>
            </View>

             <View style={css.produto}>
              <Image style={css.imagemProduto} source={require('./Imagens/lanche.jpg')} />
              <Text>X Tudo</Text>
              <Text>R$ 50,00</Text>
            </View>

            <View style={css.produto}>
              <Image style={css.imagemProduto} source={require('./Imagens/lanche.jpg')} />
              <Text>X Super Tudo</Text>
              <Text>R$ 140,00</Text>
            </View>

             <View style={css.produto}>
              <Image style={css.imagemProduto} source={require('./Imagens/lanche.jpg')} />
              <Text>X Hiper Tudo</Text>
              <Text>R$ 200,00</Text>
            </View>

        </View>
    </View>
  )
}
const css = StyleSheet.create({
  imagemProduto:{
    width:50,
    height:50,
  },
  produto:{
    width:80,
    height:110,
    borderRadius:20,
    backgroundColor:'#fff',
    justifyContent:"center",
    alignItems:'center',
    margin:10

  },
  lista:{
    backgroundColor:'#ff6500',
    borderWidth:1,
    flex:1,
    padding:10,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  container:{
    flex:1
  },
  menu:{
    backgroundColor:'#eeeeee',
    height:60,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  imagem:{
    width:40,
    height:40,
    marginRight:15,
  },
  titulo:{
    color:'#000',
    fontSize:18,
    marginLeft:15
  },
 
})