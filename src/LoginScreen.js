import React, {useState, createRef} from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView } from "react-native"

import Loader from './components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, seterrorText] = useState(false);
  const [message, setMessage] = useState('');
  
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    seterrorText('');
    if(!email){
      alert('Please Fill Email');
      return;
    }
    if(!password){
      alert('Please Fill Password');
      return;
    }
    
    //Show Loader
    setLoading(true);
    var dataToSend = {
       email,
       password,
    };

    // var formBody = [];
    // for(var key in dataToSend){
    //   var encodedKey = encodeURIComponent(key);
    //   var encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    
    // formBody = formBody.join('&');

    console.log(dataToSend);

    fetch('http://192.168.100.3:9999/user/signin', {
       method: 'POST',
       body: JSON.stringify(dataToSend),
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF8'
       }
    })
    .then(async res => {
      try {
        const jsonRes = await res.json();
        if (res.status !== 200) {
            seterrorText(true);
            setMessage(jsonRes.message);
        } else {
          AsyncStorage.setItem('user_id', jsonRes.data.email)
         navigation.replace('DrawerNavigationRoutes');
        }
    } catch (err) {
        console.log(err);
    };
    })

  }

   return(
     <View style={styles.mainBody}>
       <Loader loading={loading} />
       <ScrollView
         keyboardShouldPersistTaps="handled"
         contentContainerStyle={{
           flex: 1,
           justifyContent: 'center',
           alignContent: 'center'
         }}>
        <View>
         <KeyboardAvoidingView enabled>
          <View style={{alignItems: 'center'}}>
           <Image 
             source={require('./images/success.png')}
             style={{
               width: '50%',
               height: 100,
               resizeMode: 'contain',
               margin: 30
             }}
           />
         </View>
         
           <View style={styles.sectionStyle}>
            <TextInput 
            style={styles.inputStyle}
              onChangeText={setEmail}
              placeholder="Enter Email"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() => 
                passwordInputRef.current && passwordInputRef.current.focus()
              }
                blurOnSubmit={false}
             />
           </View>
           <View style={styles.sectionStyle}>
            <TextInput 
              style={styles.inputStyle}
              ref={passwordInputRef}
              onChangeText={setPassword}
              placeholder="Enter Password"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
             />
           </View>
        
           {errorText != '' ?(
             <Text style={styles.errorTextStyle}>
               {errorText}
             </Text>
           ) : null
            
           }
           <TouchableOpacity 
           style={styles.buttonStyle}
           activeOpacity={0.5}
            onPress={handleSubmitButton}
           >
             <Text style={styles.buttonTextStyle}>Login</Text>
           </TouchableOpacity>
           
             <Text
                 style={styles.registerTextStyle}
                 onPress={() => navigation.navigate('RegisterScreen')}
                >
                 Don't Have Account? Register
             </Text>
         </KeyboardAvoidingView>
         </View> 
       </ScrollView>
     </View>
   ); 

}

export default LoginScreen;

const styles = StyleSheet.create({

  mainBody: {
   flex: 1,
   justifyContent: 'center',
   alignContent: 'center',
   backgroundColor: '#307ecc'
  },

  sectionStyle: {
    height: 40,
    margin: 10,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35
  },

  inputStyle: {
    borderRadius: 30,
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
})