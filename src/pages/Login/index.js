import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcArrowRight, Logo} from '../../assets';

const Login = ({navigation}) => {
  const [phone, setPhone] = React.useState(null);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Logo />
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          placeholder="Your phone number"
          placeholderTextColor="#A6A6A6"
          style={styles.input}
          onChangeText={value => setPhone(value)}
        />
        <Text style={styles.note}>
          We will send you a verification code to your number.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Verification', phone)}>
            <IcArrowRight />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#5566EE',
  },
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 0.5,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: -4,
      height: 30,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 50,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: '#3E3E3E',
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#A6A6A6',
    margin: 36,
    padding: 17,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#3E3E3E',
  },
  note: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#A6A6A6',
    textAlign: 'center',
    marginHorizontal: 36,
    marginTop: 33,
  },
  button: {
    width: 68,
    height: 68,
    backgroundColor: '#5566EE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 68 / 2,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 58,
  },
});
