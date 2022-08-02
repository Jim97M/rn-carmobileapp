/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
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
  const [data, setData] = useState({
    name: '',
    model: '',
    price: '',
    location: '',
    image: '',
  });

  const handleChange = name => e => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({...data, [name]: value});
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('name', data.name);
      formData.append('model', data.model);
      formData.append('price', data.price);
      formData.append('location', data.location);
      formData.append('image', data.image);
      const res = await fetch(`http://192.168.100.254:9999/car/carpost`, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setData({name: '', model: '', price: '', location: '', image: ''});
      }
    } catch (error) {
      console.log(error);
    }
  };
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
                value={data.name}
                onChange={handleChange('name')}
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
                onChange={handleChange('model')}
                value={data.model}
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
                value={data.price}
                onChange={handleChange('price')}
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
                value={data.location}
                style={styles.textInput}
                onChange={handleChange('location')}
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
              onChange={handleChange('image')}>
              <Text>Select File</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={styles.buttonTextStyle}>ADD CAR</Text>
          </TouchableOpacity>
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
    height: height * 0.1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  // body: {
  //   borderTopStartRadius: '10%',
  //   borderTopEndRadius: '10%',
  // },
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
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },

  submit: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: width * 0.8,
  },
});
