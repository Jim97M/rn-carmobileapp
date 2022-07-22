/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './src/SignUpScreen';
import LoginScreen from './src/LoginScreen';
import SplashScreen from './src/SplashScreen';
import DrawerNavigationRoutes from './src/DrawerNavigationRoutes';
import Card from './src/components/Card';

const Stack = createStackNavigator();

const Auth = () => {
  return(
    <Stack.Navigator initialRouteName='LoginScreen'>
       <Stack.Screen
         name='LoginScreen'
         component={LoginScreen}
         options={{headerShown: false}}
       />

       <Stack.Screen
         name='SignUpScreen'
         component={SignUpScreen}
         options={{
             title: 'Register',
             headerStyle: {
                 backgroundColor: '#307ecc'
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
                 fontWeight: 'bold',
             }
         }}
       />

    </Stack.Navigator>
  );
}

const App = () => {
   return(
       <NavigationContainer initialRouteName='SplashScreen'>
        <Stack.Navigator>
           <Stack.Screen
         name='SplashScreen'
         component={SplashScreen}
         options={{headerShown: false}}
         />
         <Stack.Screen
         name='Auth'
         component={Auth}
         options={{headerShown: false}}
         />
       {/* Navigation Drawer as a landing page */}
       <Stack.Screen
          name='DrawerNavigationRoutes'
          component={DrawerNavigationRoutes}
          options={{headerShown: false}}
        />
        <Stack.Screen
         name='Card'
         component={Card}
         options={{headerShown: false}}
         />
          </Stack.Navigator>
       </NavigationContainer>
   )
}

export default App;