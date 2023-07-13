/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// NestedScreen.js

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../libs/Constants';

const NestedScreen = ({navigation:{navigate},route}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

export default NestedScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
