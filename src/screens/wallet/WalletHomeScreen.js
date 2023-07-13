/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// WalletHomeScreen.js

import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import CustomSlide from '../../components/customSlide';
import QuickLink from '../../components/QuickLink';

const slides = [
  {
    id: '1',
    title: 'Reward Balance',
    subtitle: 'Withdraw Reward',
  },
  {
    id: '2',
    title: 'CashToken Balance',
    subtitle: 'Gift CashTokens',
  },
];

const QLinks = [
  {
    id: 1,
    image: require('../../images/CashToken-Logo-2.png'),
    text: 'Gift CashToken',
  },
  {id: 2, image: require('../../images/upload.png'), text: 'Withdraw Reward'},
  {
    id: 3,
    image: require('../../images/SwitchHorizontalOutline.png'),
    text: 'Transfer',
  },
  {
    id: 4,
    image: require('../../images/qr_code_scanner.png'),
    text: 'Scan',
  },
];

const WalletHomeScreen = ({navigation: {navigate}, route}) => {
  return (
    <ScrollView style={styles.screen}>
      <HeaderText
        text={'Wallet'}
        customStyle={{textAlign: 'center', marginTop: 20}}
      />
      <CustomSlide slides={slides} />

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
        {QLinks.map(item => {
          return <QuickLink item={item} navigate={navigate} />;
        })}
      </View>

      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 18,
        }}>
        <Text style={{fontSize: 16, color: COLORS.black}}>
          Transactions History
        </Text>
        <Text style={{color: COLORS.secondary}}>See All</Text>
      </View>

      <Transaction />
      <Transaction />
      <Transaction />


    </ScrollView>
  );
};

export default WalletHomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

const Transaction = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingTop: 15,
      }}>
      <View style={{flex: 0.15}}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../../images/Mtn_logo.png')}
        />
      </View>
      <View style={{flex: 0.85}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: COLORS.black}}>Airtime Top up</Text>
          <Text style={{color: COLORS.black}}>N2,000</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 12}}>2 CashTokens</Text>
          <Text style={{fontSize: 12}}>1:30, Feb 20, 2023</Text>
        </View>
      </View>
    </View>
  );
};
