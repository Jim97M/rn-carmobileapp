import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import { reserve_car } from "../../actions/reservedCar";
import { useNavigation } from "@react-navigation/native";
import Card from '../Card';
const CarItem = props => {

  const navigation = useNavigation();

  // const handleSubmit = item => {
  //   const registeredCar = {
  //     car: item,
  //     isRegistered: true,
  //     registeredBy: "Toyota",
  //     isDriving: false
  //   };
  //   props.reserve_car(registeredCar, props);
  // };
  // console.log("=>" + props.flag);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainers}>
        <Image
          style={styles.tinyLogo}
          source={require("../../images/car_red.png")}
        />
        <View style={styles.subcontainer}>
          <Text style={styles.carname}>{props.name}</Text>
          <Text style={styles.cardetail}>{props.color}</Text>
          <Text>Available</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          borderWidth: 0.5,
          borderColor: "#ddd"
        }}
      />
      <View style={styles.carrateContainer}>
        <Text style={styles.carratefont}>MYR 20.00 / HR</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Card')}>
          <Text style={styles.carratefontB}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({
  isDataLoaded: state.reserve_car.isDataLoaded
});

export default connect(mapStateToProps, { reserve_car })(CarItem);