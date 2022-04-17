import React, {useState, createRef} from 'react'
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  ImageData,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView
} from "react-native"

import Loader from './components/Loader';
const RegisterScreen = (props) => {
  const [name, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, seterrorText] = useState(false);
  const [message, setMessage] = useState('');
  const [isRegistrationSuccess, setRegistrationSuccess] = useState(false);
  
  const emailInputRef = createRef();
  const phoneInputRef = createRef();
  const imageInputRef = createRef();
  const passwordInputRef = createRef();

  const onLoggedIn = token => {
    fetch('http://192.168.100.3:9999/car/getMakes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(async res => { 
        try {
            const jsonRes = await res.json();
            if (res.status === 200) {
                setMessage(jsonRes.message);
            }
        } catch (err) {
            console.log(err);
        };
    })
    .catch(err => {
        console.log(err);
    });
}


  const handleSubmitButton = () => {
    seterrorText('');
    if(!name){
      alert('Please Fill User Name');
      return;
    }
    if(!email){
      alert('Please Fill Email');
      return;
    }
    if(!password){
      alert('Please Fill Password');
      return;
    }
    if(!phone){
      alert('Please Fill Phone');
      return;
    }
    if(!image){
      alert('Please Fill Image');
      return;
    }

    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      image: image
    };

    // var formBody = [];
    // for(var key in dataToSend){
    //   var encodedKey = encodeURIComponent(key);
    //   var encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    
    // formBody = formBody.join('&');
    console.log(dataToSend);
    fetch('http://192.168.100.3:9999/user/signup', {
       method: 'POST',
       body: JSON.stringify(dataToSend),
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF8'
       }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      setLoading(false);
      console.log(responseJson);
      if(responseJson.status == 'success'){
        setRegistrationSuccess(true);
        console.log("Registred Successfully");
      }else{
        seterrorText(responseJson.msg);
      }
    }).catch((error) => {
      setLoading(false);
      console.error(error);
    })
  } 

  if(isRegistrationSuccess){

    return (
      <View
       style={{
         flex: 1,
         backgroundColor: '#307ecc',
         justifyContent: 'center'
       }}
      >
        <Image 
          source={require('./images/tick.gif')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignItems: 'center'
          }}
        />
        <Text>
           Registration Successful
        </Text>
        <TouchableOpacity 
         activeOpacity={0.5}
         onPress={()=> props.navigation.navigate('LoginScreen')}
        >
           <Text>Login Now</Text>
        </TouchableOpacity>
      </View>
     );
  }

   return(
     <View style={{flex: 1, backgroundColor: '#307ecc'}}>
       <Loader loading={loading} />
       <ScrollView
         keyboardShouldPersistTaps="handled"
         contentContainerStyle={{
           justifyContent: 'center',
           alignContent: 'center'
         }}>
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
         <KeyboardAvoidingView enabled>
           <View style={styles.sectionStyle}>
            <TextInput 
              style={styles.inputStyle}
              onChangeText={setuserName}
              placeholder="Enter Name"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() => 
                emailInputRef.current && emailInputRef.current.focus()
              }
                blurOnSubmit={false}
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
              ref={emailInputRef}
              onSubmitEditing={() => 
                phoneInputRef.current && phoneInputRef.current.focus()
              }
                blurOnSubmit={false}
             />
           </View>
           <View style={styles.sectionStyle}>
            <TextInput 
              style={styles.inputStyle}
            
              onChangeText={setPhone}
              placeholder="Enter Phone"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              ref={phoneInputRef}
              onSubmitEditing={() => 
                imageInputRef.current && imageInputRef.current.focus()
              }
                blurOnSubmit={false}
             />
           </View>
           <View style={styles.sectionStyle}>
            <TextInput 
            style={styles.inputStyle}
              onChangeText={setImage}
              placeholder="Enter Image"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              ref={imageInputRef}
              onSubmitEditing={() => 
                passwordInputRef.current && passwordInputRef.current.focus()
              }
                blurOnSubmit={false}
             />
           </View>
           <View style={styles.sectionStyle}>
            <TextInput 
            style={styles.inputStyle}
              onChangeText={setPassword}
              placeholder="Enter Password"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              ref={passwordInputRef}
              onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
             />
           </View>
           
           {/* <View>
            <ImageData
             ref={imageInputRef}
             
            /> */}
           {/* </View> */}
           
           {errorText != null ?(
             <Text>
               {errorText}
             </Text>
           ) : null
            
           }
           <TouchableOpacity 
           style={styles.buttonStyle}
            onPress={handleSubmitButton}
           >
             <Text style={styles.buttonTextStyle}>Register</Text>
           </TouchableOpacity>
         </KeyboardAvoidingView>
       </ScrollView>
     </View>
   ); 

}

export default RegisterScreen;

const styles = StyleSheet.create({
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

})