/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// WithdrawRewardBank.js

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import InputOption from '../../components/SelectOption';
import Input from '../../components/Input';
import Button from '../../components/Button';

const WithdrawRewardBank = ({navigation, route}) => {
  const [bankName, setBankName] = useState(null);

  const {navigate} = navigation;

  useEffect(() => {
    if (route?.params?.msg) {
      setBankName(route.params.msg.name);
    }
  }, [route.params]);

  return (
    <View style={styles.screen}>
      <HeaderText text={'Choose Bank'} />
      <InputOption
        value={bankName || 'Select Bank'}
        textStyle={{color: bankName ? COLORS.text: COLORS.default}}
        onPress={() => navigate('BankList')}
      />

      <HeaderText text={'Enter Account Number'} />
      <Input placeholder={'Account Number'} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button text={'Back'} whiteColor onPress={() => navigation.pop()} />
        <Button text={'Next'} onPress={() => navigate('Summary')} />
      </View>
    </View>
  );
};

export default WithdrawRewardBank;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
