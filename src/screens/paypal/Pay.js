/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button} from 'react-native';

export default function Pay(props) {
  const [amt, setAmt] = useState('');

  const pay = () => {
    if (amt != '') {
      props.navigation.navigate('Payment', {amt: amt});
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/paypal.png')} style={styles.img} />
      <Text style={styles.title}>PayPal</Text>
      <TextInput
        placeholder="Enter Amount"
        style={styles.textinput}
        value={amt}
        onChangeText={val => setAmt(val)}
        keyboardType="number-pad"
      />
      <Button title="Pay Now" onPress={pay} />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#fff',
  },

  img: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
  },
});
