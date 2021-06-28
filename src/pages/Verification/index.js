import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Background, IcArrowLeft} from '../../assets';
import {Input} from '../../components';

const Verification = ({route}) => {
  const phone = route.params;
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <IcArrowLeft />
        <Text style={styles.text}>Verification</Text>
      </View>
      <ImageBackground source={Background} style={styles.card}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>Enter the OTP sent to {phone}</Text>
        <View style={styles.formContainer}>
          <Input />
          <Input />
          <Input />
          <Input />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 39,
    marginTop: 45,
    marginBottom: 77,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 26,
    color: '#3E3E3E',
    marginLeft: 75,
  },
  card: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 140,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#FFFFFF',
    marginVertical: 46,
    textAlign: 'center',
    width: 220,
  },
  formContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 63,
  },
});
