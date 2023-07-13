/* eslint-disable prettier/prettier */
import {TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({placeholder}) => {
  return (
    <TextInput
      style={{
        backgroundColor: COLORS.dividers,
        paddingHorizontal: 11,
        borderRadius: 5,
      }}
      placeholder={placeholder}
    />
  );
};

export default Input;
