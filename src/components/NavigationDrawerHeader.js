import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native-gesture-handler'

const NavigationDrawerHeader = () => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    }
  return (
    <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={toggleDrawer}>
            <Image source={{uri: ''}} style={{width: 25, height: 25, marginLeft: 5}} />
        </TouchableOpacity>
    </View>
  );
};

export default NavigationDrawerHeader;
