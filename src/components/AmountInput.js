/* eslint-disable prettier/prettier */
import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';

const AmountInput = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: COLORS.lightBorderColor,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 4,
      }}>
      <Text
        style={{
          paddingRight: 5,
          color: COLORS.black,
        }}>
        ₦
      </Text>
      <TextInput
        style={{flex: 1}}
        keyboardType="number-pad"
        placeholder="Amount"
      />
    </View>
  );
};

export default AmountInput;
