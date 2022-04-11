import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './drawerscreens/HomeScreen';
import SettingScreen from './drawerscreens/SettingScreen';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen' >
          <Stack.Screen
           name="HomeScreen"
           component={HomeScreen}
           options={{
               title: 'Home', //Set Header Title
               headerLeft: () => {
                   <NavigationDrawerHeader navigationProps={navigation} />
               }
           }}
          />
        </Stack.Navigator>
    );
};

const settingsScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator
           initialRouteName='SettingScreen' >
          <Stack.Screen
           name="SettingScreen"
           component={SettingScreen}
           options={{
               title: 'Settings', //Set Header Title
               headerLeft: () => {
                   <NavigationDrawerHeader navigationProps={navigation} />
               }
           }}
          />
        </Stack.Navigator>
    );
};

