import React, {useState, useEffect} from "react";
import {
    ActivityIndicator,
    View,
    Image,
    StyleSheet
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SplashScreen = ({navigation}) => {
    const [animating, setAnimating] = useState(true);
     useEffect(() => {
        setTimeout(() => {
            setAnimating(false),
            AsyncStorage.getItem('user_id').then((value) => 
                navigation.replace(
                    value === null ? 'Auth' : 'DrawerNavigationRoutes'
                )
            )
        }, 5000)
    }, [])
    return(
       <View style={styles.container}>
           <Image
              source={
                  require('../images/splash.gif')
              }
              style={{width:'90%', resizeMode: 'contain', margin: 30}}
           />
           <ActivityIndicator
            animating={animating}
            color="#FFFFFF"
            style={styles.activityindicator}
           />
       </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#307ecc'
   },
   activityindicator: {
       justifyContent: 'center',
       height: 80
   }
})