/* eslint-disable prettier/prettier */
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';

const {width, height} = Dimensions.get('screen');

const QuickLink = ({item, navigate}) => {
  const handlePress = () => {
    if (item.id === 1) {
      navigate('RecipientSelection');
    }
    if (item.id === 2) {
      navigate('AirtimePurchase');
    }
    if (item.id === 3) {
      navigate('ElectricityPurchase');
    }
    if (item.id === 4) {
      navigate('CablePurchase');
    }
    if (item.id === 5) {
      navigate('DataPurchase');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          width: width / 4.5,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 2,
        }}>
        <View
          style={{
            backgroundColor: COLORS.gold,
            width: 70,
            height: 70,
            marginVertical: 7,
            borderRadius: 7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              width: 40,
              height: 40,
              resizeMode: 'contain',
              objectFit: 'contain',
            }}
          />
        </View>
        <Text style={{fontSize: 11, textAlign: 'center', maxWidth: '77%'}}>
          {item?.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuickLink;
