/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// WithdrawReward.js

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import SelectOption from '../../components/SelectOption';


const WithdrawReward = ({navigation: {navigate}, route}) => {
  return (
    <View style={styles.screen}>
      <HeaderText text={'How would you like to withdraw?'} />
      <SelectOption value={'Select a Plan'} onPress={() => {}} />
    </View>
  );
};

export default WithdrawReward;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
