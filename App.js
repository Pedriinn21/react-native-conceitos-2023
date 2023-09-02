import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Arrays from './screens/Arrays';
import Objeto from './screens/Objeto';
import { StyleSheet } from 'react-native';
import Pagina2 from './screens/Pagina2';
import Pagina3 from './screens/Pagina3';
import Pg1 from './screens/Pg1';
import Estado from './screens/Estado';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Objeto" component={Objeto} options={{ title: "Objeto" }} />
          <Stack.Screen name="estado" component={Estado} options={{ title: "Estado" }} />
          <Stack.Screen name="arrays" component={Arrays} options={{ title: "Arrays" }} />
          <Stack.Screen name="Pg1" component={Pg1} options={{ title: "Pagina principal" }} />
          <Stack.Screen name="Pagina2" component={Pagina2} options={{ title: "Pagina 2" }} />
          <Stack.Screen name="Pagina3" component={Pagina3} options={{ title: "Pagina 3" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'blue',
    borderstyle: 'solid',
    borderWidth: 2,
    marginBottom: 20,
  },
  titulo: {
    color: 'black',
    fontSize: 30,
    padding: 15,
    marginBottom: 3,
    borderBottomColor: 'red',
    borderBottomstyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paragrafo: {
    color: 'black',
    fontSize: 15,
  }
});