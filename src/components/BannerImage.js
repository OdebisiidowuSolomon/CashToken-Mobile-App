/* eslint-disable prettier/prettier */
import {View, Image} from 'react-native';
import React from 'react';

const BannerImage = ({image}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={image} />
    </View>
  );
};

export default BannerImage;
