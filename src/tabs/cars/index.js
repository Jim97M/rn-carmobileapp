

import React, { useState, useEffect } from 'react';
import { Image, View, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

import styles from './style';
import { images } from '../../assets';
import Content from '../../components/Content';

const Cars = ({navigation}) => {
  // const navigation = useNavigation();
     const [cars, setCars] = useState([]);
    //  const [images, setImages] = useState([]);

  // const handleNavigation = useCallback((id: number) => {
  //   navigation.navigate('Course', { id });
  // }, [navigation]);
    const fetchData = async () => {

         const {data} = await axios.get('http://192.168.100.254:9999/car/getcar');
         console.log(data);
         setCars(data);

    }

        useEffect(() => {

      fetchData();
    }, []);



  return (
    <View style={styles.container}>      
      <View style={styles.header}>
        <View style={styles.TopHeader}>
          <Image source={images.image} />
          <Icon name="power" size={24} color="#FF6680" />
        </View>
    
      </View>
      <Content>
        <View style={styles.ContentHeader}>
          <Text>Cars</Text>
        </View>
        <View style={styles.CoursesContainer}>
          {cars.map(c => (
            <RectButton style={styles.CourseCard} key={c._id}>
              <Image style={styles.CourseImage} source={images.cargif} />
              <View>
                <Text style={styles.CourseTitle}>{c.name}</Text>
                <Text style={styles.LessonText}>{c.model}</Text>
                <Text>{c.location}</Text>
                <Text>{c.description}</Text>
              </View>
            </RectButton>
          ))}
        </View>
        </Content>
                       <TouchableOpacity
                     activeOpacity={0.7}
                     style={styles.touchableOpacityStyle}
                     onPress={() => {
                      navigation.navigate('AddCar');
                     }}
                  >
                      <Image 
                        source={require('../../assets/floating.png')}
                        style={styles.floatingActionButton}
                      />
                  </TouchableOpacity>
    </View>
  )
}

export default Cars;

// /* eslint-disable jsx-quotes */
// /* eslint-disable no-undef */
// /* eslint-disable keyword-spacing */
// /* eslint-disable no-unused-vars */
// /* eslint-disable prettier/prettier */

// // global.Buffer = global.Buffer || require('buffer').Buffer;


// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// 
// import { Color } from '../../components/colors';
// import * as Progress from 'react-native-progress';
// // import { FAB } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/AntDesign';
// // import btoa from 'btoa';
// // import {Buffer} from 'buffer';


// const Cars = ({navigation}) => {




//    const fetchImage = async (base64EncodedImage) => {
//      await axios.get('http://192.168.100.254:9999/image/getimage')
//     .then((res) => setImages(res.data))
//     .catch((err) => console.log(err, "Error"));
//    }



//     return(
//        <View style={styles.container}>
//                <View style={styles.header}>
//                  <Text style={styles.headerText}>Cars</Text>
//                 </View>
                
//                    {/* {cars.length > 0 ? (
//                             <Card >
//                               {images.map((img) => {
//                                 const base64String = Buffer.from(
//                                   String.fromCharCode(...new Uint8Array(img.image.data.data))
//                                 ).toString('base64');
//                                 return <Card.Cover source={`${base64String}`} width="100" />;
//                               })}
//                                 {cars.map((car) => (
//                                    <Card.Content>
//                                       <Title>{car.brandname}</Title>
//                                       <Paragraph style={styles.locationStyle}>
//                                         <Icon name='rocket' color={'green'} size={16} />
//                                          <Text>{car.model}</Text>
//                                       </Paragraph>
//                                    </Card.Content>
//                                 ))}

//                             </Card>
//                      ) : (
//                       <Progress.CircleSnail color={'blue'} />
//                      )} */}

              
             
//                 {/* <FAB 
//                       title="ADD"
//                       placement='right'
//                       size='small'
//                       upperCase={true}
//                       icon={<Icon name='pluscircle' size={24} color="white"/>}
//                       buttonStyle={{backgroundColor: "green"}}
//                       onPress={() => 
//                         navigation.navigate('AddCar')
//                       }
//                   /> */}


//     </View>

//     );
// };


// export default Cars;



