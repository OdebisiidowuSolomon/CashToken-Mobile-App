/* eslint-disable prettier/prettier */
// Success.js

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../libs/Constants';
import Button from '../components/Button';

const Success = ({route}) => {
  return (
    <View style={styles.screen}>
      <Image source={require('../images/success-1.png')} style={{marginTop:40, marginBottom:20}} />
      <Text style={{fontSize: 22, color: COLORS.black, marginBottom: 15}}>
        Successful!
      </Text>
      <Text
        style={{
          width: '75%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: 14,
        }}>
        You have successfully gifted Cashtokens to yourself. Click the button
        below to view your Cashtoken balance
      </Text>
      <Button text={'View CashToken Balance'} />
    </View>
  );
};

export default Success;

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
