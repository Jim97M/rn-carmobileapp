/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const AddCar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ADD CAR</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.action}>
          <Text style={styles.text_footer}>Car Name</Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder={'Car Name'}
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>
        <View style={styles.action}>
          <Text style={styles.text_footer}>Car Model</Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder={'Car Model'}
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>
        <View style={styles.action}>
          <Text style={styles.text_footer}>Price</Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder={'Book Price'}
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>
        <View style={styles.action}>
          <Text style={styles.text_footer}>Location</Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder={'Location'}
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>
        <View style={styles.action}>
          <View style={styles.style1}>
            <TouchableOpacity
              onPress={() => {
                ImagePicker.launchImageLibrary({
                  mediaType: 'photo',
                  includeBase64: false,
                  maxHeight: 200,
                  maxWidth: 200,
                });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddCar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignContent: 'center',
  },

  header: {
    height: height * 0.2,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  body: {
    borderTopStartRadius: '10%',
    borderTopEndRadius: '10%',
  },
  textInput: {
    marginTop: -5,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  style1: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
});
