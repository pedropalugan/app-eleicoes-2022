import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './pages/Home/home'
import Votar from './pages/Votar/votar'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer initialRouteName="Votar">
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Votar' component={Votar}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
