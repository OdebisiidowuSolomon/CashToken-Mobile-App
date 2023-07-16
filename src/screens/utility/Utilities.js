/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// Utilities.js

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import HeaderText from '../../components/HeaderText';
import {COLORS} from '../../libs/Constants';

const {width, height} = Dimensions.get('screen');

const data = [
  {
    title: 'Buy Airtime',
    image: require('../../images/phonelink_ring.png'),
    subtitle: 'Earn CashToken and Casback on every airtime purchase.',
    path: 'AirtimePurchase',
  },
  {
    title: 'Buy Data',
    image: require('../../images/buyData.png'),
    subtitle: 'Earn CashToken and Casback on every data purchase.',
    path: 'DataPurchase',
  },
  {
    title: 'Buy Power',
    image: require('../../images/electrical_services.png'),
    subtitle: 'Earn CashToken and Casback on every electricity bills payment. ',
    path: 'ElectricityPurchase',
  },
  {
    title: 'Recharge Cable',
    image: require('../../images/connected_tv.png'),
    subtitle:
      'Earn CashToken and Casback on every cable TV subscription purchase.',
    path: 'CablePurchase',
  },
  {
    title: 'Shop on Marketplace',
    image: require('../../images/local_mall.png'),
    subtitle:
      'Shop to earn rewards, stand a chance to win between cash 5k-100m weekly!',
    path: '',
  },
];

const Utilities = ({navigation, route}) => {
  const {navigate} = navigation;

  return (
    <View style={styles.screen}>
      <HeaderText
        text={'Utilities'}
        customStyle={{textAlign: 'center', fontSize: 17, marginBottom: 20}}
      />
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../images/Rectangle-2021.png')}
          style={{width: '100%', borderRadius: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 10,
            left: '40%',
          }}>
          <Indicator active={true} />
          <Indicator />
          <Indicator />
          <Indicator />
        </View>
      </View>

      <View
        style={{
          marginTop: 24,
          flexDirection: 'row',
          gap: 16,
          flexWrap: 'wrap',
        }}>
        {data.map(({image, title, subtitle, path}) => (
          <Card
            image={image}
            subtitle={subtitle}
            title={title}
            key={title}
            path={path}
            navigate={navigate}
          />
        ))}
      </View>
    </View>
  );
};

export default Utilities;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.siteBackground,
    paddingTop: 20,
    paddingHorizontal: 18,
  },
});

const Card = ({image, title, subtitle, navigate, path}) => {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.42,
        borderRadius: 13,
        backgroundColor: COLORS.white,
        padding: 18,
      }}
      onPress={() => path && navigate(path)}>
      <Image source={image} style={{objectFit: 'contain'}} />
      <Text style={{marginVertical: 9, color: COLORS.black, fontSize: 12}}>
        {title}
      </Text>
      <Text style={{marginBottom: 9, color: COLORS.black, fontSize: 9}}>
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
};

const Indicator = ({active}) => {
  return (
    <View
      style={{
        height: 8,
        width: 8,
        borderRadius: 50,
        backgroundColor: active ? COLORS.secondary : COLORS.lightgray,
        marginRight: 5,
      }}
    />
  );
};
