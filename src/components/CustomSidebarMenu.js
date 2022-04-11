import React from 'react'
import {View, StyleSheet,Text, Alert} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem

} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CustomSidebarMenu = (props) => {
  return (
    <View>
        <View>
            <View>
                <Text></Text>
            </View>
            <Text></Text>
        </View>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}>
                <DrawerItem
                 label={({color}) => 
                   <Text style={{color: 'd8d8d8'}}>Logout</Text>
                 }
                 onPress={() => {
                     props.navigation.toggleDrawer();
                    Alert.alert(
                        'Logout',
                        'Are you sure You want to Logout?',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => {
                                    return null;
                                }
                            },
                            {
                                text: 'Confirm',
                                onPress: () => {
                                    AsyncStorage.clear();
                                    props.navigate.replace('Auth');
                                }
                            }
                        ],
                        {cancelable: false}
                    )
                 }}
                >

                </DrawerItem>
            </DrawerItemList>
        </DrawerContentScrollView>
    </View>
  )
}

export default CustomSidebarMenu;