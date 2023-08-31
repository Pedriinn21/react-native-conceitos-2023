import React from 'react'
import { Button, Text } from 'react-native'
import Card from '../components/Card'
import Botoes from '../components/Botoes'


export const Pg1 = ({navigation}) => {


  return (
    <>
      <Button title='Pagina 2' onPress={()=>navigation.navigate('Pagina2')} />
      <Button title='Pagina 3' onPress={()=>navigation.navigate('Pagina3')} />

      <Card titulo='Sem conteudo' />
      <Card titulo='Mobile'>
        <Text>React Native</Text>
      </Card>

      <Card titulo='Principal' nome='Orion'>
        <Text>paragrafo 1</Text>
        <Text>paragrafo 1</Text>
        <Text>paragrafo 1</Text>
        <Button title='detalhes' />
      </Card>
      <Card titulo='flamengo cheirinho'>
      </Card>
    </>
)
}

export default Pg1