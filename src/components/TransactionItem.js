/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../libs/Constants';

const TransactionItem = ({history, image, green, red, onPress, navigate}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('TransactionDetails')}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 18,
        paddingTop: 15,

        paddingBottom: history && 10,
        borderBottomColor: history && COLORS.default,
        borderBottomWidth: history && 1,
      }}>
      <View style={{flex: 0.15}}>
        <Image
          style={{width: 40, height: 40}}
          source={image || require('../images/Mtn_logo.png')}
        />
      </View>
      <View style={{flex: 0.85}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: COLORS.black}}>
            {image ? 'CashToken Gifting' : 'Airtime Top up'}
          </Text>
          <Text
            style={{
              color: green ? COLORS.success : red ? COLORS.error : COLORS.black,
            }}>
            {green && '+'}
            {red && '-'} N2,000
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 12, color:COLORS.text}}>2 CashTokens</Text>
          <Text style={{fontSize: 12, color:COLORS.text}}>1:30, Feb 20, 2023</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
