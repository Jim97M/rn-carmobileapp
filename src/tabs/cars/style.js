/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { Color } from '../../components/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10
    },
    header: {
        marginTop: 19,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 30,
        fontFamily: 'Raleway-Bold',
        letterSpacing: 1.09375,
        color: '#3C4046',
    },

    card: {
      flex: 1,
      marginHorizontal: 7.5,
      marginBottom: 30,
      alignItems: 'center',
      shadowColor: '#B8CDD0',
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: 1.0,
      shadowRadius: 6.68,
      elevation: 10,   
    },
    cardImage: {
        flex: 1,
        borderRadius: 8,
        marginBottom: 20,
    },
    cardText: {
        color: '#3C4046',
        letterSpacing: 1.09375,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Raleway-Regular',   
    },
    body: {
        marginTop: 30,
        paddingHorizontal: 16.5,
        paddingBottom: 100
    },

    cardStyle: {
        margin: 10,
        shadowColor: Color.overLay9,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 10,
        padding: 5
    },

    cardCover: {
        backgroundColor: Color.white
    },

    locationStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    touchableOpacityStyle: {
    //  position: 'absolute',
     width: 50,
     height: 50,
     alignItems: 'center',
     justifyContent: 'center',
     right: 0,
     bottom: -20,   
    },

    floatingActionButton: {
        resizeMode: 'contain',
        height: 50,
        width: 50
    }
});

export default styles;
