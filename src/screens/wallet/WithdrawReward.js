/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// WithdrawReward.js

import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import SelectOption from '../../components/SelectOption';
import AndriodPrompt from '../../components/AndriodPrompt';
import AndroidDataList from '../../components/androidDataList';
import Input from '../../components/Input';
import Button from '../../components/Button';

const methods = [
  {name: 'Airtime'},
  {name: 'Bank Account'},
  {name: 'Fela Wallet'},
  {name: 'Fela Wallet'},
  {name: 'Fela Wallet'},
  {name: 'Fela Wallet'},
  {name: 'Fela Wallet'},
  {name: 'Fela Wallet'},
];

const wallets = [{name: 'Reward Wallet'}];

const WithdrawReward = ({navigation, route}) => {
  const {navigate} = navigation;
  const [method, setMethod] = useState(null);
  const [wallet, setWallet] = useState(null);

  const methodAndriodPromptRef = useRef();
  const walletAndriodPromptRef = useRef();

  const handleSubmit = () => {
    if (method.name === 'Airtime') {
      navigate('AirtimePurchase', {msg: 'WithdrawReward'});
    } else if (method.name === 'Bank Account') {
      navigate('WithdrawRewardBank');
    }
  };

  return (
    <View style={styles.screen}>
      <HeaderText text={'How would you like to withdraw?'} />
      <SelectOption
        value={method?.name || 'Select'}
        textStyle={{color: method?.name ? COLORS.text : COLORS.default}}
        onPress={() => {
          methodAndriodPromptRef.current.setVisible(true);
        }}
      />

      <HeaderText text={'Choose a Wallet'} />
      <SelectOption
        value={wallet?.name || 'Select'}
        textStyle={{color: wallet?.name ? COLORS.text : COLORS.default}}
        onPress={() => {
          walletAndriodPromptRef.current.setVisible(true);
        }}
      />

      <HeaderText text={'Enter Amount'} />
      <Input placeholder={'Enter Amount'} />

      <Button
        text={'Proceed'}
        disableColor={!(method && wallet)}
        onPress={handleSubmit}
      />

      <AndriodPrompt
        ref={methodAndriodPromptRef}
        title="Choose a withdrawal method"
        titleStyle={{marginLeft: '5%'}}>
        <AndroidDataList
          data={methods}
          setValue={setMethod}
          value={method}
          ref={methodAndriodPromptRef}
        />
      </AndriodPrompt>

      <AndriodPrompt
        ref={walletAndriodPromptRef}
        title="Choose a wallet"
        titleStyle={{marginLeft: '5%'}}>
        <AndroidDataList
          data={wallets}
          setValue={setWallet}
          value={wallet}
          ref={walletAndriodPromptRef}
        />
      </AndriodPrompt>
    </View>
  );
};

export default WithdrawReward;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
