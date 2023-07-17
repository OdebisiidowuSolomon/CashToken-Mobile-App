/* eslint-disable prettier/prettier */
// Success.js

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../libs/Constants';
import Button from '../components/Button';
import {useResultStore} from '../store/resultStore';
import {useAgentStore} from '../store/AgentStore';

const Success = ({route, navigation: {navigate}}) => {
  const {successStore, resetSuccessStore} = useResultStore();
  const {productName, resetAgentStore, resetFlow, resetPaymentReview} =
    useAgentStore();

  const {mode, flow} = useAgentStore();

  const resetState = () => {
    if (mode === 'Home') {
      navigate('HomeNavigator');
    } else if (mode === 'Agent') {
      resetSuccessStore();
      resetAgentStore();
      resetFlow();
      resetPaymentReview();
      navigate('Agent');
    }
  };

  let msg = (
    <Text
      style={{
        width: '75%',
        textAlign: 'center',
        color: COLORS.black,
        fontSize: 14,
      }}>
      {successStore.msg}
    </Text>
  );

  if (flow.name === 'Partner') {
    msg = (
      <Text
        style={{
          width: '75%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: 14,
        }}>
        You have successfully gifted {productName} to yourself. Click the button
        below to view your Sales Wallet balance
      </Text>
    );
  }

  if (flow.name === 'CashToken') {
    msg = (
      <Text
        style={{
          width: '75%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: 14,
        }}>
        You have successfully gifted Cashtokens to 08146807000. Click the button
        below to view your sales wallet balance
      </Text>
    );
  }

  if (flow.name === 'AgentAirtime') {
    msg = (
      <Text
        style={{
          width: '75%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: 14,
        }}>
        You have successfully gifted N2000 airtime to{' '}
        <Text style={{color: COLORS.secondary}}>08146807000</Text>. Click the
        button below to view your sales wallet balance
      </Text>
    );
  }
  if (flow.name === 'AgentCashToken') {
    msg = (
      <Text
        style={{
          width: '75%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: 14,
        }}>
        You have successfully gifted Cashtokens to{' '}
        <Text style={{color: COLORS.secondary}}>08146807000</Text>. Click the
        button below to view your sales wallet balance .
      </Text>
    );
  }

  if (flow.name === 'AgentData') {
    msg = (
      <Text
        style={{
          width: '75%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: 14,
        }}>
        You have successfully gifted data bundle to{' '}
        <Text style={{color: COLORS.secondary}}>08146807000</Text>. Click the
        button below to view your sales wallet balance .
      </Text>
    );
  }

  if (flow.name === 'AgentElectricity') {
    msg = (
      <Text
        style={{
          width: '75%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: 14,
        }}>
        You have successfully purchase Electricity for yourself. Click the
        button below to view your Sales Wallet balance
      </Text>
    );
  }

  if (flow.name === 'AgentCable') {
    msg = (
      <Text
        style={{
          width: '75%',
          textAlign: 'center',
          color: COLORS.black,
          fontSize: 14,
        }}>
        You have successfully Subscribed your cable TV. Click the button below
        to view your Sales Wallet balance
      </Text>
    );
  }

  console.log(flow);

  return (
    <View style={styles.screen}>
      <Image
        source={require('../images/success-1.png')}
        style={{marginTop: 40, marginBottom: 20}}
      />
      <Text style={{fontSize: 22, color: COLORS.black, marginBottom: 15}}>
        Successful!
      </Text>
      {msg}
      <Button
        text={flow.BTNsuccessMessage || successStore.btnText}
        onPress={resetState}
      />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
  },
});
