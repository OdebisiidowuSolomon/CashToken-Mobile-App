/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// AgentGiftPaymentMethod.js

import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import HeaderText from '../../components/HeaderText';
import {PackageSelectionItem} from './PartnershipSelection';
import {COLORS} from '../../libs/Constants';
import {RadioButton} from 'react-native-paper';
import Button from '../../components/Button';
import ConfirmationModal from '../../components/confirmationModal';
import Modal from '../../components/Modal';
import {useResultStore} from '../../store/resultStore';
import {useAgentStore} from '../../store/AgentStore';

const AgentGiftPaymentMethod = ({navigation, route}) => {
  const {navigate} = navigation;
  const [method, _setMethod] = useState();

  const {setSuccessMessage, setSuccessBtnMessage} = useResultStore();
  const {productName, flow} = useAgentStore();

  const modalRef = useRef();
  const confirmationRef = useRef();

  //   const showTwo = route?.params?.msg === 'ShowTwo';
  const showTwo = flow.paymentMethod === 3;

  console.log(showTwo, flow);

  return (
    <View style={styles.screen}>
      <RadioButton.Group
        onValueChange={e => {
          if (flow.name === 'AgentCable') {
            return;
          } else if (!productName || flow.name !== 'AgentCable') {
            setTimeout(() => {
              navigate('ReviewPayment', {msg: e});
            }, 200);
          }
          _setMethod(e);
        }}
        value={method}>
        <HeaderText text={'How will you like to pay?'} />
        <PackageSelectionItem
          image={require('../../images/account_balance_wallet.png')}
          title={'My Sales Wallet'}
          subtitle={'7,000'}
          subtitleStyle={{fontWeight: '500'}}
        />
        {showTwo && (
          <>
            <PackageSelectionItem
              image={require('../../images/account_balance_wallet.png')}
              title={'My Commission Wallet'}
              subtitle={'2,500'}
              subtitleStyle={{fontWeight: '500'}}
            />
            <PackageSelectionItem
              image={require('../../images/account_balance_wallet.png')}
              title={'My Incentive Wallet'}
              subtitle={'2,500'}
              subtitleStyle={{fontWeight: '500'}}
            />
          </>
        )}
      </RadioButton.Group>

      {productName ||
        (flow.name === 'AgentCable' && (
          <PaymentProcessModal
            modalRef={modalRef}
            confirmationRef={confirmationRef}
            setSuccessBtnMessage={setSuccessBtnMessage}
            setSuccessMessage={setSuccessMessage}
            navigate={navigate}
            productName={productName}
          />
        ))}
    </View>
  );
};

export default AgentGiftPaymentMethod;

export const PaymentProcessModal = ({
  modalRef,
  confirmationRef,
  setSuccessMessage: setSuccessMessage,
  setSuccessBtnMessage: setSuccessBtnMessage,
  productName: productName,
  navigate: navigate,
  successMessage,
  successBtnMessage,
}) => {
  return (
    <>
      <Modal
        ref={modalRef}
        onCancel={() => confirmationRef.current.setVisible(true)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            style={{objectFit: 'contain'}}
            source={require('../../images/CTR-1.png')}
          />
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{color: COLORS.secondaryText}}>Tina Anya</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text>Pay:</Text>
              <Text style={{color: COLORS.black, marginLeft: 5}}>
                Pay: NGN 5000.00
              </Text>
            </View>
          </View>
        </View>

        <Text style={{color: COLORS.black, textAlign: 'center', marginTop: 25}}>
          Enter your card details to complete payment
        </Text>

        <View style={{marginTop: 17}}>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: COLORS.dividers,
              padding: 10,
              color: COLORS.black,
            }}
            placeholder="Card Number"
            placeholderTextColor={COLORS.secondaryText}
          />
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.dividers,
                padding: 10,
                flex: 4,
                marginRight: 15,
                color: COLORS.black,
              }}
              placeholder="Card Expiry"
              placeholderTextColor={COLORS.secondaryText}
            />
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.dividers,
                padding: 10,
                flex: 4,
                color: COLORS.black,
              }}
              placeholder="CVV"
              placeholderTextColor={COLORS.secondaryText}
            />
          </View>
        </View>

        <Button
          text={'Pay NGN 5,000.00'}
          onPress={() => {
            modalRef.current.setVisible(false);
            setSuccessMessage(
              successMessage ||
                `You have successfully gifted ${productName} to yourself. Click the button below to view your Sales Wallet balance`,
            );
            setSuccessBtnMessage(
              successBtnMessage || 'View Sales Wallet Balance',
            );
            navigate('Success');
          }}
        />
      </Modal>

      <ConfirmationModal
        ref={confirmationRef}
        onCancel={() => {
          modalRef.current.setVisible(false);
          confirmationRef.current.setVisible(false);
        }}
        onContinue={() => {
          confirmationRef.current.setVisible(false);
        }}
      />

      <View
        style={[
          styles.prompt,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 20,
          },
        ]}>
        <View>
          <Text style={{fontSize: 13, color: COLORS.secondaryText}}>
            You Pay
          </Text>
          <Text style={{color: COLORS.black, marginTop: 10}}>N5,000.00</Text>
        </View>
        <Button
          customStyle={{width: '45%', marginLeft: 10, bottom: 10}}
          text={'Make Payment'}
          onPress={() => modalRef.current.setVisible(true)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.siteBackground,
    paddingHorizontal: 18,
  },
  prompt: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: Dimensions.get('window').width,
    backgroundColor: COLORS.white,
    padding: 15,
  },
});
