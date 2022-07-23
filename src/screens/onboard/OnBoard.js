/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import {
    View,
    Dimensions,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    FlatList,
    SafeAreaView
} from 'react-native';

const COLORS = {primary: '#282534', white: '#fff'};

const {height, width} = Dimensions.get('window');
const slideItems = [
    {
        id: 1,
        title: "Best Cars",
        description: "Find Car To Book",
        image: "../../images/car_sleek.png",
    },
    {
        id: 2,
        title: "Book Car",
        description: "Rent Easy",
        image: "../../images/car_saloon.png",
    },
    {
        id: 1,
        title: "Start Now",
        description: "Lets Get Started",
        image: "../../images/car_red.png",
    },

];

const Slide = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
           <Image source={item?.image}
            style={{height: '75%', width, resizeMode: 'contain'}}
           />
           <View>
              <Text style={styles.title}>{item?.title}</Text>
              <Text style={styles.description}>{item?.description}</Text>
           </View>
      </View>
    );
};

const OnBoard = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef();

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffsetX.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slideItems.length){
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({offset});
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slideItems.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
             style={{
                height: height * 0.25,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
             }}>
               {/* Indicator Container */}
               <View
                 style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 20,
                 }}>
                    {/* Indicator Container */}
                   {slideItems.map((_, index) => (
                    <View
                     key={index}
                     style={[
                        styles.indicator,
                        currentSlideIndex == index && {
                           backgroundColor: COLORS.white,
                           width: 25,
                        },
                     ]}
                    />
                   ))

                   }
               </View>

             {/* Render Buttons */}
             <View style={{marginBottom: 20}}>
                 {currentSlideIndex == slideItems.length - 1 ? (
                    <View style={{height: 50}}>
                        <TouchableOpacity
                           style={styles.btn}
                           onPress={() => navigation.navigate('SignUpScreen')}
                        >
                            <Text
                              style={{fontWeight: 'bold', fontSize: 15}}
                            >
                                GET STARTED
                            </Text>
                        </TouchableOpacity>
                    </View>
                 ) : (
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={[
                            styles.btn,
                            {
                                borderColor: COLORS.white,
                                borderWidth: 1,
                                backgroundColor: 'transparent',
                            },
                          ]}
                          onPress={skip}
                         >
                         <Text
                           style={{
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: COLORS.white
                           }}>
                            SKIP
                         </Text>
                        </TouchableOpacity>
                        <View style={{width: 15}} />
                         <TouchableOpacity
                           activeOpacity={0.8}
                           onPress={goToNextSlide}
                           style={styles.btn}>
                           <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}
                           >
                             NEXT
                           </Text>
                         
                            
                         </TouchableOpacity>   
                    </View>
                 )}
             </View>
            </View>
        );
    };

  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slideItems}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnBoard;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
    },
    description: {
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 10,
    },
    image: {
        height: '80%',
        width: '70%',
        resizeMode: 'contain',
      },
      indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
      },
      btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
});
