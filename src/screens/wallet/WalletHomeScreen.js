/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// WalletHomeScreen.js

import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import CustomSlide from '../../components/customSlide';
import QuickLink from '../../components/QuickLink';
import TransactionItem from '../../components/TransactionItem';

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
    route: '',
  },
  {
    id: 2,
    image: require('../../images/upload.png'),
    text: 'Withdraw Reward',
    route: 'WithdrawReward',
  },
  {
    id: 3,
    image: require('../../images/SwitchHorizontalOutline.png'),
    text: 'Transfer',
    route: 'TransferReward',
  },
  {
    id: 4,
    image: require('../../images/qr_code_scanner.png'),
    text: 'Scan',
    route: '',
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
          return <QuickLink key={item.id} item={item} navigate={navigate} />;
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

      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
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
