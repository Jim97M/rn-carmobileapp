/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsCard = ({iconName, setting}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.iconText}>
          <Icon name={iconName} size={25} color="white" />
          <Text style={styles.text}>{setting}</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name={'chevron-forward'} size={30} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    width: '80%',
    height: 80,
    borderRadius: 1.5,
    borderWidth: 1.5,
    borderColor: 'white',
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 20,
  },

  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontFamily: 'AlongSansSemiBold',
    color: 'white',
    top: 3,
    left: 10,
  },
});
