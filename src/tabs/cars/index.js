/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

const Cars = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
         try {
           const {data: response} = await axios.get('http://192.168.100.254:9999/car/getcar');
           setData(response);
         } catch (error) { 
           console.log(error.message);
         }
         setLoading(false);
      }

      fetchData();
    }, []);
    

    return(
        <SafeAreaView>
               <View style={styles.header}>
                 <Text style={styles.headerText}>Cars</Text>
                </View>    
                <View style={styles.body}>
                  
                            <TouchableOpacity
                              style={styles.card}>
                                {data.map(item => (
                                   <Text style={styles.cardText}>{item.brandname}</Text>
                                ))}
                                
                            </TouchableOpacity>
                     
                </View>
            
        </SafeAreaView>
    );
};

export default Cars;
