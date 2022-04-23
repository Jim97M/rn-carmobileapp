import React, { useState, useEffect } from "react";
import { globalStyles } from "../../../styles/global";
import { styles } from "./styles";
import ImagePickerComp from "../../../utilities/ImagePicker";
import { useForm } from "../../../customHooks/useForm";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { createCarList } from "../../../actions/rentCarList";

import {
  TextInput,
  View,
  Text,
  LogBox,
  TouchableOpacity,
  ScrollView
} from "react-native";


const ListYourCarScreen = props => {

  // const [image, setImage] = useState(null);
  // const [rate, setRate] = useState(25);
  // const [Loading, isLoading] = useState(false);

  // const handleSubmit = e => {
  //   const object = {
  //     ...values,
  //     rate,
  //     image
  //   };
  //   if (isEmpty(object)) {
  //     showAlert("Kindly fill all the fields");
  //   } else {
  //     isLoading(true);
  //     props.createCarList(object, props);
  //   }
  // };

  // useEffect(() => {
  //   LogBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
  //   checkImageStatus();
  // }, []);
    //     {Loading ? (
  //       <AnimatedCircularProgress
  //         style={styles.animatedCircular}
  //         size={50}
  //         width={10}
  //         fill={100}
  //         duration={2000}
  //         tintColor="#00e0ff"
  //         backgroundColor="#3d5875"
  //       />
  //     ) : (

  return (
    <View style={globalStyles.container}>


        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={globalStyles.heading}>Car Information</Text>
            <TextInput
              placeholder="Car name"
              style={globalStyles.input}
             // onChangeText={txt => handleChange("name", txt)}
             // value={values.name}
            />
            <TextInput
              placeholder="Car color"
              style={globalStyles.input}
             // onChangeText={txt => handleChange("color", txt)}
             // value={values.color}
            />
             <TextInput
              placeholder="Car Brand"
              style={globalStyles.input}
             // onChangeText={txt => handleChange("color", txt)}
             // value={values.color}
            />
           
           <TextInput
              placeholder="Car Brand"
              style={globalStyles.input}
             // onChangeText={txt => handleChange("color", txt)}
             // value={values.color}
            />
            
            <TextInput
              placeholder="Car Rate"
              style={globalStyles.input}
             // onChangeText={txt => handleChange("color", txt)}
             // value={values.color}
            />
             
            <Text style={globalStyles.heading}>Address line</Text>
            <TextInput
              placeholder="Address"
              style={globalStyles.input}
              //onChangeText={txt => handleChange("address", txt)}
              //value={values.address}
            />

             <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={selectFile}>
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

// ListYourCarScreen.navigationOptions = commonNavigation("List your car");

// const mapStateToProps = state => ({
//   status: state.my_car.status
// });

export default ListYourCarScreen;
//connect(mapStateToProps, { createCarList })(ListYourCarScreen);