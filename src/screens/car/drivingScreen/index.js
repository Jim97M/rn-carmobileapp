import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { commonNavigation } from "../../../utilities/AppUtils";
import ActiveCar from "../../../components/activeCar/index";
import { styles } from "./styles";
import database from "@react-native-firebase/database";

const DriveNowScreen = props => {
  const [isDriving, setDriving] = useState(false);
  const [carDetails, setCarDetails] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    database()
      .ref("/User")
      .orderByChild("registeredBy")
      .equalTo("Toyota")
      .on("value", snapshot => {
        let isCarRegistered = false;
        let car = "";
        snapshot.forEach(function (data) {
          car = data.child("car").val();
          if (car) {
            getCarDetails(car);
          }
          if (data.child("isRegistered").val()) {
            isCarRegistered = true;
          }
        });
        setDriving(isCarRegistered);
      });
  };

 const getCarDetails = car => {
    database()
      .ref("/User")
      .orderByChild("name")
      .equalTo(car)
      .on("value", snapshot => {
        snapshot.forEach(function (data) {
          setCarDetails(data.val());
        });
      });
  };
  return (
    <View style={styles.container}>
      {isDriving ? (
        <ActiveCar carDetails={carDetails} navigate={props} />
      ) : (
        <View style={styles.containersub}>
          <Image
            style={styles.tinyLogo}
            source={require("../../../images/car_saloon.png")}
          />
          <Text style={styles.content}>Not driving a car yet</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              props.navigation.navigate("ReserveCar");
            }}
          >
            <Text style={styles.buttonContent}>MAKE A RESERVATION</Text>
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <Text style={styles.content}>Want to earn using your car?</Text>
            <TouchableOpacity
              style={styles.buttonBottomContainer}
              onPress={() => {
                props.navigation.navigate("ListYourCar");
              }}
            >
              <Text style={styles.buttonContent}>LIST YOUR CAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

DriveNowScreen.navigationOptions = commonNavigation("Drive Now");
export default DriveNowScreen;