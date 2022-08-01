/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';

import {WebView} from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

export default function Payment(props) {
    const route = useRoute();

    const stateChng = () => {
   
        const {url, title} = navState;
        //Console.log(navState);
        if(title == 'PayPal Success'){
            console.log('url', url);
            let spliturl = url.split('?');
            let splitotherhalf = spliturl[i].split('&');
            console.log("splitotherhalf", splitotherhalf);
            let paymentId = splitotherhalf[0].replace("paymentId=", "");
            let token = splitotherhalf[2].replace("PayerID=","");
            let PayerID = splitotherhalf[2].replace("PayerID=", "");
            props.navigation.navigate('Success', {payId:paymentId, token:token, payerId:PayerID})
        }

    }

    return (
        <WebView 
         startInLoadingState={true}
         onNavigationStateChange={stateChng}
         renderLoading={() => <Loading />}
         source={{uri: 'http://192.168.100.254:9999/pay/pay/' + route.params.amt}}
        />
    )
}
    const Loading = () => {
        return(
            <View style={{height: height, width: width, justifyContent: 'center', alignItems: 'center'}}>
               <Image
               source={require('../../assets/paypal.png')}
                  style={{width: 250, height: 100, resizeMode: 'contain'}}
               />
            </View>
        )
    }
