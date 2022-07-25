/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Card, Title, useTheme } from "react-native-paper";
import axios from "axios";
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 2);

const Home = ({navigation}) => {

  const [items, setItems] = useState([]);
   const theme = useTheme();

   const fetchData = () => {
         axios.get('http://192.168.0.29:9999/car/carpost')
         .then(async function(response) {
          setItems(response.data);
         })
         .catch(function (error){
           console.log(error);
         })
   }

  return (
    <ScrollView>
      <View style={styles.titleContainer}>
         <Title style={styles.title}>Cars</Title>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  titleContainer: {
    width: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  title: {
    fontSize: 30,

  }
})