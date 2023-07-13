/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';

const CustomText = ({text}) => {
  return (
    <Text
      style={{
        fontWeight: '500',
        marginTop: 15,
        fontSize: 17,
        color: COLORS.text,
      }}>
      {text}
    </Text>
  );
};

export default CustomText;