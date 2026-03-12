import { Button, View, Text, Image, StyleSheet, Pressable } from 'react-native'

export default function TelaInicial(){
  return (
    <View style={css.container}>
      <Text style={css.titulo}>Navegação</Text>
      <Text>Tela principal do app, primeira tela</Text>
        <Pressable onPress={() => console.log('Botão pressionado')} style={css.botao}>
          <Text>Tela de Login</Text>
        </Pressable>
         <Pressable onPress={() => console.log('Botão pressionado')} style={css.botao}>
          <Text>Tela de IFood</Text>
        </Pressable>
         <Pressable onPress={() => console.log('Botão pressionado')} style={css.botao}>
          <Text>Tela de Produtos</Text>
        </Pressable>
    </View>
  )
}

const css = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffb2',
    justifyContent:'center',
    alignItems:'center'
  },
  titulo:{
    fontSize:45
  },
  botao:{
     padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor:'#5E936C',
    marginVertical: 5,
  },
})