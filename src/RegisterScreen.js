import React, {useState, createRef} from 'react'
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ImageData,
  KeyboardAvoidingView } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';

  import Loader from './components/Loader';
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

    fetch('http://localhost:9999/users/signup', {
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
            <ImageData
             ref={imageInputRef}
             
            />
           </View>
           
           {errorText != null ?(
             <Text>
               {errorText}
             </Text>
           ) : null
            
           }
           <TouchableOpacity 
            onPress={handleSubmitButton}
           >
             <Text>Register</Text>
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