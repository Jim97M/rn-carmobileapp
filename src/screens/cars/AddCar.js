/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

const height = Dimensions.get('screen').height;

const AddCar = () => {
  // const [data, setData] = useState({
  //   name: '',
  //   model: '',
  //   price: '',
  //   location: '',
  //   description: '',
  //   checkTextInputChange: false,
  // });

  // const [res, setRes] = useState({
  //   err: '',
  //   res: '',
  // });

  // const nameChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       name: val,
  //       checkTextInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       checkTextInputChange: false,
  //     });
  //   }
  // };

  // const modelChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       model: val,
  //       checkTextInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       checkTextInputChange: false,
  //     });
  //   }
  // };

  // const priceChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       price: val,
  //       checkTextInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       checkTextInputChange: false,
  //     });
  //   }
  // };

  // const locationChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       location: val,
  //       checkTextInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       checkTextInputChange: false,
  //     });
  //   }
  // };

  // const descriptionChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       description: val,
  //       checkTextInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       checkTextInputChange: false,
  //     });
  //   }
  // };

  // const handleSubmit = () => {
  //   const {name, model, price, location, description} = data;
  //   Axios.post('http://192.168.0.29:9999/car/carpost', {
  //     name: name,
  //     model: model,
  //     price: price,
  //     location: location,
  //     description: description,
  //   }).then(res => {
  //     Alert.alert(`${res.err}`, 'Failed', [{text: 'Success'}]).catch(err =>
  //       console.log(err.response),
  //     );
  //   });
  // };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>ADD CAR</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.action}>
          <Text style={styles.text_footer}>Car Name</Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              
              <TextInput
                placeholder={'Car Name'}
                placeholderTextColor="#666666"
                style={styles.textInput}
                // onChange={val => nameChange(val)}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.action}>
            <Text style={styles.text_footer}>Car Model</Text>
            <View style={styles.style1}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  placeholder={'Car Model'}
                  placeholderTextColor="#666666"
                  style={styles.textInput}
                  // onChange={val => modelChange(val)}
                  autoCapitalize="none"
                />
              </View>
            </View>
          </View>
          <View style={styles.action}>
            <Text style={styles.text_footer}>Price</Text>
            <View style={styles.style1}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  placeholder={'Book Price'}
                  placeholderTextColor="#666666"
                  // onChange={val => priceChange(val)}
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
                <TextInput
                  placeholder={'Location'}
                  placeholderTextColor="#666666"
                  style={styles.textInput}
                  // onChange={val => locationChange(val)}
                  autoCapitalize="none"
                />
              </View>
            </View>
          </View>
          <View style={styles.action}>
            <Text style={styles.text_footer}>Description</Text>
            <View style={styles.style1}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  placeholder={'Description'}
                  placeholderTextColor="#666666"
                  style={styles.textInput}
                  // onChange={val => descriptionChange(val)}
                  autoCapitalize="none"
                />
              </View>
            </View>
          </View> */}
          {/* <View style={styles.action}>
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
        </View> */}
          {/* <View style={styles.button}>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 5,
                },
              ]} */}
              
              {/* onPress={() => { */}
                  {/* handleSubmit();
               }}
               >
              <Text */}
      {/* //           style={[ */}
      {/* //             styles.textSign,
      //             { */}
      {/* //               color: '#009387',
      //             },
      //           ]}>
      //           ADD CAR
      //         </Text> */}
      {/* //       </TouchableOpacity> */}
      {/* //     </View> */}
      {/* //   </View> */}
      {/* // </View> */}
      <Text>Text</Text>
    </View> 
  );
};

export default AddCar;

// const styles = StyleSheet.create({
  // style1: {
  //   flexDirection: 'row',
  //   marginTop: 10,
  //   justifyContent: 'space-between',
  // },
  // container: {
  //   flex: 1,
  //   alignContent: '#009387',
  // },
  // action: {
  //   marginTop: 10,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#f2f2f2',
  //   paddingBottom: 5,
  // },
  // actionError: {
  //   flexDirection: 'row',
  //   marginTop: 10,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#FF0000',
  //   paddingBottom: 5,
  // },
  // header: {
  //   height: height * 0.1,
  //   justifyContent: 'center',
  //   paddingBottom: 50,
  // },
  // signIn: {
  //   width: '100%',
  //   height: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  // },
  // footer: {
  //   flex: 5,
  //   backgroundColor: '#fff',
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30,
  //   paddingHorizontal: 20,
  //   paddingVertical: 30,
  // },
  // headerText: {
  //   fontWeight: 'bold',
  //   fontSize: 15,
  // },
  // errorMsg: {
  //   color: '#FF0000',
  //   fontSize: 14,
  // },
  // textInput: {
  //   marginTop: -5,
  //   paddingLeft: 10,
  //   color: '#05375a',
  // },
  // button: {
  //   alignItems: 'center',
  //   marginTop: 10,
  // },
  // textSign: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
// });
