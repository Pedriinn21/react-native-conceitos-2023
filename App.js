import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import Card from './components/Card';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
    
        <ScrollViwe style={{ marginTop: 50, margin: 8 }}>
            <StatusBar></StatusBar>
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen nome="Pagina1" component={Pagina1} />
            <Stack.Screen nome="Pagina2" component={Pagina2} />
            <Stack.Screen nome="Pagina3" component={Pagina3} />
            </Stack.Navigator>

            </NavigationContainer>

        </ScrollViwe>
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
