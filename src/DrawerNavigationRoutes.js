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

const DrawerNavigatorRoutes = (props) => {
     return(
         <Drawer.Navigator
           drawerContentOptions={{
               activeTintColor: '#cee1f2',
               color: '#cee1f2',
               itemStyle: {marginVertical: 5, color: 'white'},
               labelStyle: {
                   color: '#d8d8d8'
               },
           }}
           screenOptions={{headerShown: false}}
           drawerContent={CustomSidebarMenu}
         >
            <Drawer.Screen
             name="homeScreenStack"
             options={{drawerLabel: 'Home Screen'}}
             component={homeScreenStack}
           />
           <Drawer.Screen
             name="settingScreenStack"
             options={{drawerLabel: 'Setting Screen'}}
             component={settingsScreenStack}
            />
         </Drawer.Navigator>
     )
}

export default DrawerNavigatorRoutes;