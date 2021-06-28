import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <Logo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#5566EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
