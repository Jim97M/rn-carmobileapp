import React from "react";
import {View, ActivityIndicator, StyleSheet, Modal} from "react-native";

const Loader = (props) => {
    const {loading, ...attributes} = props;
     return(
         <Modal
           transparent={true}
           animationType={'none'}
           visible={loading}
           onRequestClose = {() => {
              console.log("Loader Closed");
           }}
         >
           <View style={styles.activityIndicatorWrapper}>
             <View style={styles.activityIndicator}>
                 <ActivityIndicator 
                  animating={true}
                  color={"#000000"}
                  size="large"
                 />
             </View>
          </View>
         </Modal>
         
     )
}

export default Loader;

const styles = StyleSheet.create({
     modalBackground: {
         flex: 1,
         flexDirection: "column",
         justifyContent: "space-around",
         backgroundColor: "#00000040"
     },
     activityIndicatorWrapper: {
        backgroundColor: "#FFFFFF",
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
     },
     activityIndicator: {
       alignItems: 'center',
       height: 80
     }
})