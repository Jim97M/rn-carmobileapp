/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoard from "../screens/onboard/OnBoard";
import LoginScreen from "../screens/login/LoginScreen";
import SignUpScreen from "../screens/register/SignUpScreen";
import Home from "../screens/home";
const Stack = createNativeStackNavigator();

const Router = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="OnBoard" component={OnBoard} />

         <Stack.Screen name="LoginScreen" component={LoginScreen} />
         <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
         <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
};
export default Router;