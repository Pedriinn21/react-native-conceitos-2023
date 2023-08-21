import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import Card from './components/Card';

export default function App() {
  return (
    <ScrollView style= {{marginTop: 30}}> 
    
      <Card/>

    <View style= {styles.card}>
      <Text style = {styles.titulo}>SALVE</Text>
      <Text>Isso é um parágrafo</Text>
      <Text style = {styles.paragrafo}>Isso é um parágrafo</Text>
      <Text>Isso é um parágrafo</Text>
      <StatusBar style="auto" />
    </View>


    <View style= {styles.card}>
    <Text style = {styles.titulo}>SALVE</Text>
      <Text>Isso é um parágrafo</Text>
    </View>

    <View style= {styles.card}>
    <Text style = {styles.titulo}>SALVE</Text>
      <Text>Isso é um parágrafo</Text>
    </View>


    </ScrollView>
  );
}

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
