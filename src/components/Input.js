/* eslint-disable prettier/prettier */
import {TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({placeholder, onChangeText, value}) => {
  return (
    <TextInput
      style={{
        backgroundColor: COLORS.dividers,
        paddingHorizontal: 11,
        borderRadius: 5,
      }}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
