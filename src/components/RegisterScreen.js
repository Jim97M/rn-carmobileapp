import React, {useState, createRef} from 'react'
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';

  import Loader from './Loader';
const RegisterScreen = (props) => {
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, seterrorText] = useState(false);
  const [isRegistrationSuccess, setRegistrationSuccess] = useState(false);
  
  const emailInputRef = createRef();
  const userInputRef = createRef();
  const phoneInputRef = createRef();
  const imageInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    seterrorText('');
    if(!userName){
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
      name: userName,
      email: email,
      phone: phone,
      password: password,
      image: image
    };

    var formBody = [];
    for(var key in dataToSend){
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    
    formBody = formBody.join('&');

    fetch(url, {
       method: POST,
       body: formBody,
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF8'
       }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      setLoading(false);
      
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
          source={require('../images/tick.gif')}
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
             source={require('../images/success.png')}
             style={{
               width: '50%',
               height: 100,
               resizeMode: 'contain',
               margin: 30
             }}
           />
         </View>
         <KeyboardAvoidingView enabled>
           <View>
            <TextInput 
              ref={userInputRef}
              onChangeText={(userName) => setuserName(userName)}
              placeholder="Enter Name"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() => 
                userInputRef.current && userInputRef.current.focus()
              }
                blurOnSubmit={false}
             />
           </View>
           <View>
            <TextInput 
              ref={emailInputRef}
              onChangeText={(email) => setEmail(email)}
              placeholder="Enter Email"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() => 
                emailInputRef.current && emailInputRef.current.focus()
              }
                blurOnSubmit={false}
             />
           </View>
           <View>
            <TextInput 
              ref={phoneInputRef}
              onChangeText={(phone) => setPhone(phone)}
              placeholder="Enter Phone"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() => 
                phoneInputRef.current && phoneInputRef.current.focus()
              }
                blurOnSubmit={false}
             />
           </View>
           <View>
            <TextInput 
              ref={passwordInputRef}
              onChangeText={(password) => setPassword(password)}
              placeholder="Enter Password"
              underlineColorAndroid="#f000"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() => 
                passwordInputRef.current && passwordInputRef.current.focus()
              }
                blurOnSubmit={false}
             />
           </View>
           <View>
            <TextInput 
              ref={emailInputRef}
              onChangeText={(userName) => setuserName(userName)}
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
           {errorText != null ?(
             <Text>
               {errorText}
             </Text>
           ) : null
            
           }
           <TouchableOpacity 
            onPress={handleSubmit}
           >
             <Text>Register</Text>
           </TouchableOpacity>
         </KeyboardAvoidingView>
       </ScrollView>
     </View>
   ); 

}

export default RegistrationScreen;