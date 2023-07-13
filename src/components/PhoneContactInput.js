/* eslint-disable prettier/prettier */
import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import { COLORS } from '../libs/Constants';

const PhoneContactInput = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.lightBorderColor,
          alignItems: 'center',
          paddingHorizontal: 10,
          borderRadius: 4,
          flex: 0.9,
        }}>
        <Text
          style={{
            borderRightWidth: 1,
            borderRightColor: COLORS.black,
            paddingRight: 5,
            color: COLORS.default,
          }}>
          +234
        </Text>
        <TextInput style={{flex: 1}} keyboardType="number-pad" />
      </View>
      <View
        style={{
          backgroundColor: COLORS.gold,
          flex: 0.1,
          marginLeft: 12,
          padding: 11,
          borderRadius: 5,
        }}>
        <Image source={require('../images/contacts.png')} />
      </View>
    </View>
  );
};

export default PhoneContactInput;
