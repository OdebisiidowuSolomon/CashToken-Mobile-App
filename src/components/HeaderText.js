/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';

const HeaderText = ({text, customStyle}) => {
  return (
    <Text
      style={[
        {
          fontSize: 14,
          color: COLORS.black,
          fontWeight: '500',
          marginTop: 10,
          marginBottom: 10,
        },
        {...customStyle},
      ]}>
      {text}
    </Text>
  );
};

export default HeaderText;
