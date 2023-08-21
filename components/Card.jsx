import React from 'react'
import { View } from 'react-native'
import { StyleSheet, Text } from 'react-native'

const Card = () => {
  return (
    <>
    <View style= {styles.card}>
    <Text style = {styles.titulo}>SALVE</Text>
    <Text>Isso é um parágrafo</Text>
    </View>
    </>
  )
}

export default Card
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      borderColor: 'blue',
      borderStyle: 'solid',
      borderWidth: 2,
      marginBottom:20
    },
  
    titulo: {
      color: 'white',
      fontSize: 30,
      padding: 20,
      marginBottom: 20,
      borderBottomcolor: 'red',
      borderBottomStyle: 'dotted',
      bordeBottomrWidth: 5,
      textAlign: 'center',
      backgroundColor:'red'
    },
    paragrafo: {
      fontSize: 20
    }
  });