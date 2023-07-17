/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// ReviewPayment.js

import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import {useAgentStore} from '../../store/AgentStore';
import {useResultStore} from '../../store/resultStore';
import HeaderText from '../../components/HeaderText';
import {CustomPin} from './AgentSignUp';
import {PaymentProcessModal} from './AgentGiftPaymentMethod';

const ReviewPayment = ({navigation, route}) => {
  const {navigate} = navigation;

  const {setSuccessMessage, setSuccessBtnMessage} = useResultStore();
  const {productName, flow, paymentReview} = useAgentStore();

  const modalRef = useRef();
  const confirmationRef = useRef();

  console.log(paymentReview);

  const walletName = route?.params?.msg
    .split(' ')
    .slice(1, 3)
    .join(' ')
    .toLowerCase();
  //   console.log(walletName);

  return (
    <View style={styles.screen}>
      <Text style={{color: COLORS.black}}>
        Confirm{' '}
        <Text style={{color: COLORS.secondary}}>
          {paymentReview.amount || 'N5,000'}
        </Text>{' '}
        deducted from your {walletName || 'sales wallet'} for {paymentReview.intent || '5 cashToken'} purchase
      </Text>
      <HeaderText
        text={'Enter your 4 digit pin to continue'}
        customStyle={{color: COLORS.secondaryText, fontSize: 13}}
      />
      <View style={{marginTop: 20}} />
      <CustomPin />
      <PaymentProcessModal
        modalRef={modalRef}
        confirmationRef={confirmationRef}
        setSuccessBtnMessage={setSuccessBtnMessage}
        successMessage={
          'You have successfully gifted N2000 airtime to 08146807000. Click the button below to view your sales wallet balance'
        }
        successBtnMessage={'View Balance'}
        setSuccessMessage={setSuccessMessage}
        navigate={navigate}
        productName={productName}
      />
    </View>
  );
};

export default ReviewPayment;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
