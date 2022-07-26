/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cars from "../../tabs/cars";
const HomeIcon = require('../../assets/flower.svg');
const Home = () => {

  // const [items, setItems] = useState([]);
  //  const theme = useTheme();

  //  const fetchData = () => {
  //        axios.get('http://192.168.0.29:9999/car/getcar')
  //        .then(async function(response) {
  //         setItems(response.data);
  //        })
  //        .catch(function (error){
  //          console.log(error);
  //        })
  //  }

const {Navigator, Screen} = createBottomTabNavigator();

  
  return (
    <Navigator
    >
       <Screen 
        name="Cars"
        component={Cars}
       />
    </Navigator>
  );
};

export default Home;
