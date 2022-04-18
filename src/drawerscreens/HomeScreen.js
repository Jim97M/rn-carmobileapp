import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-elements';
import useDates from '../hooks/useDates';
import Main from '../Main';
const HomeScreen = ({navigation, dates}) => {
    const {startDate, endDate} = dates;
    const [pcpDate, retDate] = useDates(pcpDate, retDate);

    return(
      <>
       <Main />
      </>
    )
}

