/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import DriveNowScreen from "../car/drivingScreen/index";
import PastBookingScreen from "../car/pastBookingScreen/index";

const DrivingStack = createStackNavigator(
  {
    Driving: DriveNowScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const PastBookStack = createStackNavigator(
  {
    PastBook: PastBookingScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const TabNavigator = createMaterialTopTabNavigator({
  DriveNowScreen: {
    screen: DrivingStack,
    navigationOptions: {
      tabBarLabel: "DRIVING NOW",
      tabBarOptions: {
        style: {
          backgroundColor: "#56CCF2" //color you want to change
        }
      }
    }
  },
  PastBookingScreen: {
    screen: PastBookStack,
    navigationOptions: {
      tabBarLabel: "PAST BOOKINGS",
      tabBarOptions: {
        style: {
          backgroundColor: "#56CCF2" //color you want to change
        }
      }
    }
  }
});

export default createAppContainer(TabNavigator);
