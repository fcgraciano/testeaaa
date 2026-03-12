import { StyleSheet, View, Image, Text } from 'react-native';

export default function Lanche({nome,valor,imagem}) {
  return (
    <View style={css.itemProduto}>
      <Text>{nome}</Text>
      <Image style={css.imagemProduto} source={imagem} />
      <Text>R$ {valor}</Text>
    </View>
  );
}
const css = StyleSheet.create({
  itemProduto: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
    },
  imagemProduto: {
      width: 80,
      height: 80,
    },
  
});
