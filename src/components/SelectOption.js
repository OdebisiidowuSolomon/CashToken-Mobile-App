/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputOption = ({onPress, value, textStyle, leftText}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        backgroundColor: COLORS.dividers,
        padding: 11,
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <Text
        style={[
          {flex: 0.9, paddingLeft: 8, color: COLORS.lightgray},
          {...textStyle},
        ]}>
        {value}
      </Text>
      <View>{leftText && <Text>{leftText}</Text>}</View>
      <Icon name="chevron-right" size={29} style={{flex: 0.1}} />
    </TouchableOpacity>
  );
};

export default InputOption;
