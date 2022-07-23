/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
// import DrawerNavigationRoutes from './src/DrawerNavigationRoutes';
// import Card from './src/components/Card';
import Router from './src/navigation/Routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
   return(
       <NavigationContainer>
          <Router />
       </NavigationContainer>
   );
};

export default App;