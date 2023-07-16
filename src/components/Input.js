/* eslint-disable prettier/prettier */
import {TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({placeholder, onChangeText, value, customStyle, ...props}) => {
  console.log(props);
  return (
    <TextInput
      style={[
        {
          backgroundColor: COLORS.dividers,
          paddingHorizontal: 11,
          borderRadius: 5,
          color: COLORS.text,
        },
        {...customStyle},
      ]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={COLORS.default}
      {...props}
    />
  );
};

export default Input;
