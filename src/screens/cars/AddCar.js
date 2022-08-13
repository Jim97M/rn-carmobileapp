import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
import Axios from 'axios';

const AddCar = ({navigation}) => {
  const [data, setData] = useState({
    name: '',
    model: '',
    price: '',
    location: '',
    description: '',
  });
  const [res, setRes] = useState({
    err: '',
    res: '',
  });

  const nameChange = val => {
    setData({
      ...data,
      name: val,
    });
  };

  const modelChange = val => {
    setData({
      ...data,
      model: val,
    });
  };

  const priceChange = val => {
    setData({
      ...data,
      price: val,
    });
  };

  // const nationalIdChange = val => {
  //   setData({
  //     ...data,
  //     national_id: val,
  //   });
  // };

  const locationChange = val => {
    setData({
      ...data,
      location: val,
    });
  };

  const descriptionChange = val => {
    setData({
      ...data,
      description: val,
    });
  };

  const registerHouse = () => {
    const {name, model, price, location, description} = data;
    Axios.post('http://192.168.100.254:9999/car/carpost', {
      name,
      model,
      price,
      location,
      description,
    }).then(res => {
      //console.log(res.data.access_token)
      if (res.data) {
        navigation.navigate('PostImage');
      }
    });
    // .then(res1 => {
    //   Alert.alert(`${res.err}`, 'Check', [{text: 'Success'}]);
    //   Alert.alert = 'Success' ? navigation.navigate('UploadImage') : null;
    // })
    // .catch(err => console.log(err.response));
  };

  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>LandLord Info</Text>
      </View>
      <Animatable.View animation="fadeInLeft" style={styles.footer}>
        <View style={styles.action}>
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Fisrtname
          </Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <TextInput
                placeholder={'Firstname'}
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => nameChange(val)}
              />
            </View>

            {data.checkTextInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
        </View>
        <View style={styles.action}>
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Othernames
          </Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <TextInput
                placeholder={'Othername'}
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => modelChange(val)}
              />
            </View>

            {data.checkTextInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
        </View>
        <View style={styles.action}>
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Housename
          </Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <TextInput
                placeholder={'Housename'}
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => priceChange(val)}
              />
            </View>

            {data.checkTextInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
        </View>
        {/* <View style={styles.action}> */}
        {/* <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}>
            National Id
          </Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <TextInput
                placeholder={'National Id'}
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={val => nationalIdChange(val)}
              />
            </View>
            {data.checkTextInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
        </View> */}
        <View style={styles.action}>
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Location
          </Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="lock" color={colors.text} size={20} />
              <TextInput
                placeholder={'Location'}
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                onChangeText={val => locationChange(val)}
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>
        <View style={styles.action}>
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Description
          </Text>
          <View style={styles.style1}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="lock" color={colors.text} size={20} />
              <TextInput
                type={'text'}
                placeholder={'Description'}
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                onChangeText={val => descriptionChange(val)}
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              registerHouse();
            }}
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 10,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#009387',
                },
              ]}>
              Post House
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  style1: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 0.4,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  color_textPrivate: {
    color: 'grey',
  },
  action: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    marginTop: -5,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default AddCar;
