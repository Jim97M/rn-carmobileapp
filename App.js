import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/components/RegisterScreen';
const App = () => {
   return(
       <RegistrationScreen />
   )
}

export default App;