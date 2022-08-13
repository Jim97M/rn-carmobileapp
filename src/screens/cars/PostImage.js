/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import {singleFileUpload} from '../../utilities/api';

const PostImage = () => {
  const [singleFile, setSingleFile] = useState('');

  const uploadSingleFile = async (props) => {
    const formData = new FormData();
    formData.append('file', singleFile);
    await singleFileUpload(formData);
    // eslint-disable-next-line no-undef
    props.getsingle();
  };

  const imageGalleryLaunch = e => {
    let options = {
      storageOptions: {
        skipBackup: true,

        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      //   console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

        alert(res.customButton);
      } else {
        // const source = {uri: res.uri};

        // console.log('response', JSON.stringify(res));

        setSingleFile(e.target.files[0]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
          }}
          style={{width: 100, height: 100}}
        />

        <Image
          source={{uri: this.state.resourcePath.uri}}
          style={{width: 200, height: 200}}
        />

        <Text style={{alignItems: 'center'}}>
          {this.state.resourcePath.uri}
        </Text>

        <TouchableOpacity
          onPress={() => imageGalleryLaunch()}
          style={styles.button}>
          <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => uploadSingleFile()}
          style={styles.button}>
          <Text style={styles.buttonText}>Upload Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 30,

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#fff',
  },

  button: {
    width: 250,

    height: 60,

    backgroundColor: '#3740ff',

    alignItems: 'center',

    justifyContent: 'center',

    borderRadius: 4,

    marginBottom: 12,
  },

  buttonText: {
    textAlign: 'center',

    fontSize: 15,

    color: '#fff',
  },
});
