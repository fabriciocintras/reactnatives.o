import React, {Component} from 'react'
import {notificationManager} from './src/NotificationManager'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Index from './src/paginas/Index'
import Ofertas from './src/paginas/Ofertas'
import Ofertas1 from './src/paginas/Ofertas1'
import Ofertas2 from './src/paginas/Ofertas2'
import Ofertas0 from './src/paginas/Ofertas0'

const Stack = createStackNavigator();
const notificador = notificationManager

export default class App extends Component {
  constructor(props) {
    super(props)
   
  }

  
  componentDidMount() {
    notificador.configurar()
    notificador.criarCanal()
    notificador.agendarNotificacao() 
  };

  clicarParaEnviar = () => {
    notificador.exibirNotificacao(
      1,
      "Refeição",
      "Refeição",
      {}, // data
      {} // options
    )
  };
  clicarParaEnviar2 = () => {
    notificador.exibirNotificacao(
      2,
      "Ofertas",
      "Ofertas",
      {}, // data
      {} // options
    )
  };
  clicarParaEnviar0 = () => {
    notificador.exibirNotificacao(
      0,
      "Cupons",
      "Cupons",
      {}, // data
      {} // options
    )
  };

  cancelar = () => {
    notificador.cancelar()
  }

  render() {

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" options={{title:"Bem vindo!"}}>
            {
              ({navigation})=> {notificador.definirNavegador(navigation);
              return(<Index navegador={navigation} clicarParaEnviar0={this.clicarParaEnviar0} clicarParaEnviar={this.clicarParaEnviar} clicarParaEnviar2={this.clicarParaEnviar2} cancelar={this.cancelar}/>
              )
              }}
          </Stack.Screen>

          <Stack.Screen name='Ofertas' options={{title:'Promocoes!'}}>
            {({navigation})=>{  return(<Ofertas navegador={navigation}  clicarParaEnviar={this.clicarParaEnviar}/>)}}
          </Stack.Screen>

          <Stack.Screen name='Ofertas0' options={{title:'Cupons'}}>
            {({navigation})=>{  return(<Ofertas0 navegador={navigation} />)}}
          </Stack.Screen>

          <Stack.Screen name='Ofertas1' options={{title:'Proxima Refeição'}}>
            {({navigation})=>{  return(<Ofertas1 navegador={navigation} />)}}
          </Stack.Screen>

          <Stack.Screen name='Ofertas2' options={{title:'Ofertas'}}>
            {({navigation})=>{  return(<Ofertas2 navegador={navigation} />)}}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

