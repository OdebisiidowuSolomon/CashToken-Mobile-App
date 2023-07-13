/* eslint-disable prettier/prettier */
import {View, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import { COLORS } from '../libs/Constants';

const NetworkProviderData = [
  {id: 1, img: require('../images/Mtn_logo.png')},
  {id: 2, img: require('../images/Glo_logo.png')},
  {id: 3, img: require('../images/airtel_logo.png')},
  {id: 4, img: require('../images/9_mobile_logo.png')},
];

const width = Dimensions.get('screen').width;

const NetworkProviderList = ({setProvider, provider}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 10}}>
      {NetworkProviderData.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => setProvider(item.id)}
            style={{
              width: width / 5,
              backgroundColor: COLORS.lightBorderColor,
              alignItems: 'center',
              paddingVertical: 6,
              marginRight: 13,
              borderRadius: 6,
              borderWidth: 1,
              borderColor:
                provider === item.id ? COLORS.secondary : 'transparent',
            }}>
            <Image source={item.img} key={item.id} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NetworkProviderList;
