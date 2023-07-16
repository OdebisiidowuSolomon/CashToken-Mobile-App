/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// Summary.js

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import Button from '../../components/Button';

const Summary = ({navigation: {navigate}, route}) => {
  return (
    <View style={styles.screen}>
      <Text style={{textAlign: 'center', color: COLORS.text}}>
        Amount to Pay
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 22,
          color: COLORS.black,
          marginVertical: 14,
        }}>
        N2,000
      </Text>
      <View
        style={{
          padding: 15,
          marginBottom: 15,
          backgroundColor: COLORS.white,
          borderRadius: 10,
        }}>
        <SpacedTextItem
          LeftText={'Product name'}
          leftStyle={{color: COLORS.secondaryText}}
          RightText={'Ikeja Disco'}
        />
        <SpacedTextItem
          LeftText={'Meter Number'}
          leftStyle={{color: COLORS.secondaryText}}
          RightText={'2348146807501 '}
        />
        <SpacedTextItem
          LeftText={'Fee'}
          leftStyle={{color: COLORS.secondaryText}}
          RightText={'N0.00 '}
        />
      </View>
      <View
        style={{
          paddingVertical: 15,
          backgroundColor: COLORS.white,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: COLORS.black,
            paddingBottom: 10,
            borderBottomColor: COLORS.dividers,
            borderBottomWidth: 1,
            paddingHorizontal: 15,
          }}>
          Rewards
        </Text>
        <View style={{paddingHorizontal: 15}}>
          <SpacedTextItem
            LeftText={'CashToken'}
            RightText={'50'}
            leftStyle={{color: COLORS.secondaryText}}
          />
          <SpacedTextItem
            LeftText={'Cashback you earn'}
            RightText={'N20 '}
            leftStyle={{color: COLORS.secondaryText}}
          />
        </View>
      </View>
      <Button
        text={'Proceed to Pay'}
        onPress={() => navigate('GiftPaymentMethod')}
      />
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.dividers,
    paddingHorizontal: 18,
  },
});

const SpacedTextItem = ({LeftText, RightText, leftStyle}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 13,
        alignItems: 'center',
      }}>
      <Text style={[{color: COLORS.black}, {...leftStyle}]}>{LeftText}</Text>
      <Text style={{color: COLORS.black}}>{RightText}</Text>
    </View>
  );
};
