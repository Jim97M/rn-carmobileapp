/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cars from "../../tabs/cars";
import  Icon  from "react-native-vector-icons/Feather";
import Setting from "../setting";
const Tab = createBottomTabNavigator();
const Home = () => {


  return (
    <Tab.Navigator
      initialRouteName="CarPage"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {elevation: 0, borderTopWidth: 0, backgroundColor: 'black'},
        tabBarIcon: ({focused, iconColor, iconName}) => {
          if(route.name === 'Cars'){
            iconColor = focused ? '#3a86fe' : 'white'
            iconName = 'home'
          }else if (route.name === 'Settings'){
            iconColor = focused ? '#3a86fe' : 'white'
            iconName = 'user'
          }
          return <Icon name={iconName} size={25} color={iconColor} />
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Cars" component={Cars} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
};

export default Home;
