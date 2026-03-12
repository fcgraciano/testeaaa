import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native'

export default function TelaCep(){
  return(
    <View style={css.container}>
        <Text>Cep</Text>
        <TextInput style={css.caixaTexto} />
        <Text>Rua</Text>
        <TextInput style={css.caixaTexto} />
        <Text>Bairro</Text>
        <TextInput style={css.caixaTexto} />
        <Text>Cidade</Text>
        <TextInput style={css.caixaTexto} />
        <Text>Estado</Text>
        <TextInput style={css.caixaTexto} />
        <Pressable style={css.botao}>
            <Text>Consultar CEP</Text>
        </Pressable>
    </View>
  );
}
const css = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ccc'
  },
  caixaTexto:{
    height:75,
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius:5,
    padding:5,
    margin:5
  },
  botao:{
    backgroundColor:'#000fff',
    padding:20,
    justifyContent:'center'

  }
})