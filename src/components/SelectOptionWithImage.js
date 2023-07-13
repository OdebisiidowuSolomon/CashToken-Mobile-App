/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputOptionWithIcon = ({onPress, image, value}) => {
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
      <Image source={image} style={{flex: 0.1, objectFit: 'contain'}} />
      <Text style={{flex: 0.8, paddingLeft: 8, color: COLORS.black}}>
        {value}
      </Text>
      <Icon name="chevron-right" size={29} style={{flex: 0.1}} />
    </TouchableOpacity>
  );
};

export default InputOptionWithIcon;
