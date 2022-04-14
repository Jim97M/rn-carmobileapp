import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/RegisterScreen';
import LoginScreen from './src/LoginScreen';
import SplashScreen from './src/SplashScreen';
import DrawerNavigationRoutes from './src/DrawerNavigationRoutes';

const Stack = createStackNavigator();

const Auth = () => {
    <Stack.Navigator initialRouteName='LoginScreen'>
       <Stack.Screen
         name='LoginScreen'
         component={LoginScreen}
         options={{headerShown: false}}
       />

       <Stack.Screen
         name='RegistrationScreen'
         component={RegistrationScreen}
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
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
          </Stack.Navigator>
       </NavigationContainer>
   )
}

export default App;