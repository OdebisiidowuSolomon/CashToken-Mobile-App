/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../libs/Constants';
import {transparent} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

const Button = ({
  customStyle,
  innerStyle,
  text,
  onPress = () => {},
  disableColor,
  whiteColor,
}) => {
  console.log(disableColor);
  return (
    <TouchableOpacity
      onPress={disableColor ? () => {} : onPress}
      activeOpacity={0.8}
      style={[
        {
          marginTop: 25,
        },
        {...customStyle},
      ]}>
      <LinearGradient
        colors={
          disableColor
            ? [COLORS.default, COLORS.default]
            : whiteColor
            ? [COLORS.white, COLORS.white]
            : [COLORS.secondary, COLORS.primary]
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          {
            width: 'auto',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 7,
            borderWidth: 2,
            borderColor: disableColor
              ? 'transparent'
              : whiteColor
              ? COLORS.secondary
              : 'transparent',
          },
          {...innerStyle},
        ]}>
        <Text
          style={{
            fontSize: 15,
            color: disableColor
              ? COLORS.black
              : whiteColor
              ? COLORS.secondary
              : COLORS.white,
            textAlign: 'center',
          }}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
