import {View, Image, Text, StyleSheet} from 'react-native'
import Loja from './Componentes/Loja'
import Lanche from './Componentes/Lanche'

export default function IFood() {

 const listaLanches = [
    {
      img: 'https://www.delicioso.com.br/wp-content/uploads/migration/bob-esponja-hamburguer-siri-08.17-1400x800.jpg',
      preco: '25,50',
    },
    {
      img: require('./Imagens/xbacon.png'),
      preco: '24,50',
    },
    {
      img: require('./Imagens/xsalada.png'),
      preco: '44,50',
    },
    {
      img: require('./Imagens/xbacon.png'),
      preco: '24,50',
    },
    {
      img: require('./Imagens/xsalada.png'),
      preco: '35,50',
    },
    {
      img: require('./Imagens/maionese.png'),
      preco: '19,50',
    },
    {
      img: require('./Imagens/xbacon.png'),
      preco: '22,50',
    },
    {
      img: require('./Imagens/maionese.png'),
      preco: '27,50',
    },
    {
      img: require('./Imagens/xbacon.png'),
      preco: '29,50',
    },
    {
      img: require('./Imagens/xsalada.png'),
      preco: '21,50',
    },
    {
      img: require('./Imagens/maionese.png'),
      preco: '31,50',
    },
    {
      img: require('./Imagens/xsalada.png'),
      preco: '36,50',
    },
  ];

  return (
     <View style={css.container}>
       <View style={css.logo}>
        <Image
          style={css.imagem_logo}
          source={require('./Imagens/logo_ifood_branco.png')}
        />
      </View>
      <View style={css.linha}>
        <Loja imagem={require('./Imagens/logo-confianca.png')}/> 
        <Loja imagem={require('./Imagens/logo_tauste.png')}/> 
        <Loja imagem={require('./Imagens/kozan_logo.png')}/> 
        <Loja imagem={require('./Imagens/mcLogo.png')}/> 
      </View>
      <View style={css.box}>
        <Lanche img={listaLanches[0].img} preco={listaLanches[0].preco} />
        <Lanche img={listaLanches[1].img} preco={listaLanches[1].preco} />
        <Lanche img={listaLanches[2].img} preco={listaLanches[2].preco} />
        <Lanche img={listaLanches[3].img} preco={listaLanches[3].preco} />
        <Lanche img={listaLanches[4].img} preco={listaLanches[4].preco} />
        <Lanche img={listaLanches[5].img} preco={listaLanches[5].preco} />
        <Lanche img={listaLanches[6].img} preco={listaLanches[6].preco} />
        <Lanche img={listaLanches[7].img} preco={listaLanches[7].preco} />
        <Lanche img={listaLanches[8].img} preco={listaLanches[8].preco} />
        <Lanche img={listaLanches[9].img} preco={listaLanches[9].preco} />
        <Lanche img={listaLanches[10].img} preco={listaLanches[10].preco} />
        <Lanche img={listaLanches[11].img} preco={listaLanches[11].preco} />
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    backgroundColor: '#e62e2e',
    flex: 1,
    justifyContent: 'start', //alinhamento vertical
    alignItems: 'center', //alinhamento horizontal
  },

  logo: {
    borderRadius: 10,
    width: '90%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1
  },
  imagem_logo: {
    width: 150,
    height: 100,
  },
  linha: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#f0f',
    marginVertical: 10,
    borderWidth:1
  },

  box: {
    //backgroundColor:'#fcf',
    height: '70%',
    width: '95%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    borderWidth:1
    
  },
  
});