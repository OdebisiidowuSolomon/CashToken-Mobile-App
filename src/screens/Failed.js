/* eslint-disable prettier/prettier */
// Failed.js

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../libs/Constants';
import Button from '../components/Button';

const Failed = ({route}) => {
  return (
    <View style={styles.screen}>
      <Image
        source={require('../images/failed.png')}
        style={{marginTop: 40, marginBottom: 20}}
      />
      <Text style={{fontSize: 22, color: COLORS.error, marginBottom: 15}}>
        Oops, Failed
      </Text>
      <Text
        style={{
          width: '75%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: 14,
        }}>
        Make sure your internet connection is stable then Try Again
      </Text>
      <Button text={'Try Again'} />
    </View>
  );
};

export default Failed;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
  },
});
