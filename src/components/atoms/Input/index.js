import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = () => {
  const [background, setBackground] = React.useState('#8794FF');
  const [color, setColor] = React.useState('#FFFFFF');
  const onFocusForm = () => {
    setBackground('#FFFFFF');
    setColor('#3E3E3E');
  };
  const onBlurForm = () => {
    setBackground('#8794FF');
    setColor('#FFFFFF');
  };
  return (
    <TextInput
      style={styles.form(background, color)}
      onFocus={onFocusForm}
      onBlur={onBlurForm}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  form: (background, color) => ({
    backgroundColor: background,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    paddingLeft: 22,
    fontFamily: 'Montserrat-Regular',
    fontSize: 28,
    color: color,
  }),
});
