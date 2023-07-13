/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../libs/Constants';

const Button = ({customStyle, innerStyle, text, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          marginTop: 25,
        },
        {...customStyle},
      ]}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          {
            width: 'auto',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 7,
            backgroundColor: 'red',
          },
          {...innerStyle},
        ]}>
        <Text
          style={{
            fontSize: 15,
            color: COLORS.white,
            textAlign: 'center',
          }}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
