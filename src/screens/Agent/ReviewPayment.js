/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// ReviewPayment.js

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../../libs/Constants';

const ReviewPayment = ({navigation, route}) => {
  const {navigate} = navigation;

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

export default ReviewPayment;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
