/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Dimensions, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../libs/Constants';

export default function WavyHeader({customStyles}) {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={[{width}, {...customStyles}]}>
      <View style={{backgroundColor: COLORS.tertiaryCream, height: 80, width}}>
        <Svg
          height="100%"
          width={width}
          viewBox="0 0 1440 320"
          style={{position: 'absolute', top: 80}}>
          <Path
            fill={COLORS.tertiaryCream}
            d="M0,32L120,69.3C240,107,480,181,720,202.7C960,224,1200,192,1320,176L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}

{
  /* <Path fill="#5000ca" d="M0,64L1440,192L1440,0L0,0Z" /> */
  // d="M0,64L120,96C240,128,480,192,720,213.3C960,235,1200,213,1320,202.7L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
}
