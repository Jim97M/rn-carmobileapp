/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Setting from '../screens/setting';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator>
          <Stack.Screen
           name="HomeScreen"
           component={HomeScreen}
           options={{
            headerShown: false
           }}
          />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return(
        <Tab.Navigator
         screenOptions={{
           headerShown: false,
           tabBarShowLabel: false,
           tabBarStyle: {backgroundColor: '#AD40AF'},
           tabBarInactiveTintColor: '#fff',
           tabBarActiveTintColor: 'yellow',            
         }}
        >
            <Tab.Screen
             name="Home"
             component={HomeStack}
             options={({route}) => ({
                tabBarStyle: {
                    display: getTabBarVisibility(route),
                    backgroundColor: '#AD40AF',
                },
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home-outline" color={color} size={size} />
                ),
                })}
            />
                
            <Tab.Screen 
              name="Settings"
              component={Setting}
              options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="heart-outline" color={color} size={size} />
                ),
              }}
            />
        </Tab.Navigator>
    );
};

const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

    // if(routeName == ''){

    // }

    // return 'flex';

}

export default TabNavigator;