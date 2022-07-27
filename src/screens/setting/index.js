/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

  
import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsCard from '../../components/SettingsCard';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;


const Setting = props => {
  return (
    <View style={styles.container}>
        <View style={styles.upper}>
           <View style={styles.iconContainer}>
                <Text style={styles.text}>
                  User
                </Text>
           </View>
           <View>
              <SettingsCard
               iconName='person-circle'
               setting='Profile'
              />
              <SettingsCard
               iconName='shield-checkmark'
               setting='Access Rights'
              />
              <SettingsCard
               iconName='language'
               setting='Language'
              />
              </View>
        </View>
    </View>
  )
}
// Setting.navigationOptions = commonNavigation('Setting');

export default Setting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: SCREENHEIGHT,
  },

  text: {
    fontSize: 25,
    fontFamily: 'reost-bold',
    color: 'black',
    alignSelf: 'center',
    top: 60
  },

  upper: {
    height: SCREENHEIGHT/3.5,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  iconContainer: {
    height: 100,
    width: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    top: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  

     
})