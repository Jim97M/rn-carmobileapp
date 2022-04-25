import React, { useState, useEffect } from "react";
import { globalStyles } from "../../../styles/global";
import { styles } from "./styles";
import { useForm } from "../../../customHooks/useForm";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import {launchImageLibrary} from 'react-native-image-picker';
import Axios from "axios";

import {
  TextInput,
  View,
  Text,
  LogBox,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";


const ListYourCarScreen = ({navigation}) => {

  const [photo, setPhoto] = useState(null);
  const [data, setData] = useState({
     brandname: "",
     model: "",
     rate: "",
     color: "",
     address: "",
     description : "",
     image: "",
     checkTextInputChange: false 
  });

  const [res, setRes] = useState({
    err: "",
    res: ""
  });

  const nameChange = (val) => {
    if(val.length !== 0){
      setData({
        ...data,
        brandname: val,
        checkTextInputChange: true
      })
    }else{
      console.log("Fill In");
    }
  }
  const colorChange = (val) => {
    if(val.length !== 0){
      setData({
        ...data,
        color: val,
        checkTextInputChange: true
      })
    }else{
      console.log("Fill in the blank")
    }
  }

  const modelChange = (val) => {
    if(val.length !== 0){
      setData({
        ...data,
        model: val,
        checkTextInputChange: true
      })
    } else {
      console.log("Fill In");
    }
  }

  const rateChange = (val) => {
    if(val.length !== 0){
      setData({
        ...data,
        rate: val,
        checkTextInputChange: true
      })
    }
  }

  const descriptionChange = (val) => {
    if(val.length !== 0){
      setData({
        ...data,
        description: val,
        checkTextInputChange: true
      })
    }
  }

  const addressChange = (val) => {
    if(val.address !== 0){
      setData({
        ...data,
        address: val,
        checkTextInputChange: true
      })
    }
  }
  

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, (response) => {
      if(response){
        setPhoto(response)
      }
    })
  }
    
  const handleSubmit = () => {
    const {brandname, model, color, rate, description, address, photo} = data;
    Axios.post('http://192.168.100.3:9999/car/carpost', {
      brandname,
      model,
      color,
      rate,
      description,
      address,
      photo
    }).then(res=> console.log(res))
  }
  

  return (
    <View style={globalStyles.container}>


        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={globalStyles.heading}>Car Information</Text>
            <TextInput
              placeholder="Car Brand Name"
              style={globalStyles.input}
              onChangeText={(val) => nameChange(val)}
            />
            <TextInput
              placeholder="Car color"
              style={globalStyles.input}
              onChangeText={(val) => colorChange(val)}
            />
             <TextInput
              placeholder="Car Model"
              style={globalStyles.input}
              onChangeText={(val) => modelChange(val)}
            />
           
       
            <TextInput
              placeholder="Car Description"
              style={globalStyles.input}
              onChangeText={(val) => descriptionChange(val)}
            />
             
            <Text style={globalStyles.heading}>Address line</Text>
            <TextInput
              placeholder="Address"
              style={globalStyles.input}
              onChangeText={(val) => addressChange(val)}
              
            />

            <TextInput
              placeholder="Rent Rate"
              style={globalStyles.input}
              onChangeText={(val) => rateChange(val)}
                />

             <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleChoosePhoto}>
               <Text style={styles.buttonTextStyle}>Select Image</Text>
             </TouchableOpacity>
           
            <TouchableOpacity
              onPress={handleSubmit}
              style={globalStyles.appButtonContainer}
            >
              <Text style={globalStyles.appButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
     </View>

 
  );
};



export default ListYourCarScreen;