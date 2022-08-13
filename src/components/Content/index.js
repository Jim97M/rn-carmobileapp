/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {ScrollView} from 'react-native';
import {styles} from './style';

const Content = ({children}) => {
  return (
    <ScrollView style={styles.Container}>
        {children}
    </ScrollView>);
};

export default Content;
