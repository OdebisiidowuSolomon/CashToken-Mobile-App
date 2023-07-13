/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';

const NairaInput = ({amount}) => {
  console.log(amount);
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
        style={{flex: 1, color: COLORS.black}}
        keyboardType="number-pad"
        placeholder="Amount"
        value={amount ? amount : null}
        editable={amount ? false : true}
      />
    </View>
  );
};

export default NairaInput;
