/* eslint-disable jsx-quotes */
/* eslint-disable no-undef */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// global.Buffer = global.Buffer || require('buffer').Buffer;


import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet } from 'react-native';
import styles from './style';
import { Color } from '../../components/colors';
import * as Progress from 'react-native-progress';
import { Card, Paragraph, Title } from 'react-native-paper';
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
// import btoa from 'btoa';
// import {Buffer} from 'buffer';


const Cars = () => {
    const [cars, setCars] = useState([]);
    const [images, setImages] = useState([]);

    const fetchData = async () => {

         const {data} = await axios.get('http://192.168.100.181:9999/car/getcar');
         console.log(data);
         setCars(data);

    }


   const fetchImage = async (base64EncodedImage) => {
     await axios.get('http://192.168.100.181:9999/image/getimage')
    .then((res) => setImages(res.data))
    .catch((err) => console.log(err, "Error"));
   }

    useEffect(() => {

      fetchData();
      fetchImage();
    }, []);


    return(
       <View>
               <View style={styles.header}>
                 <Text style={styles.headerText}>Cars</Text>
                </View>
                <View style={styles.body}>
                   {/* {cars.length > 0 ? (
                            <Card >
                              {images.map((img) => {
                                const base64String = Buffer.from(
                                  String.fromCharCode(...new Uint8Array(img.image.data.data))
                                ).toString('base64');
                                return <Card.Cover source={`${base64String}`} width="100" />;
                              })}
                                {cars.map((car) => (
                                   <Card.Content>
                                      <Title>{car.brandname}</Title>
                                      <Paragraph style={styles.locationStyle}>
                                        <Icon name='rocket' color={'green'} size={16} />
                                         <Text>{car.model}</Text>
                                      </Paragraph>
                                   </Card.Content>
                                ))}

                            </Card>
                     ) : (
                      <Progress.CircleSnail color={'blue'} />
                     )} */}
                     <FAB 
                      title="ADD"
                      placement='right'
                      size='small'
                      upperCase={true}
                      icon={<Icon name='pluscircle' size={24} color="white"/>}
                      buttonStyle={{backgroundColor: "green"}}
                     />
                </View>

    </View>

    );
};

export default Cars;

