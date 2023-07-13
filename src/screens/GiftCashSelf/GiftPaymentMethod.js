/* eslint-disable prettier/prettier */
// GiftPaymentMethod.js

import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

import {COLORS} from '../../libs/Constants';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ConfirmationModal from '../../components/confirmationModal';

const GiftPaymentMethod = ({navigation: {navigate}, route}) => {
  const [value, setValue] = useState();

  const modalRef = useRef();
  const confirmationRef = useRef();

  return (
    <View style={styles.screen}>
      <RadioButton.Group onValueChange={setValue} value={value}>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.black,
              fontWeight: '500',
              marginTop: 15,
            }}>
            How will you like to pay?
          </Text>
        </View>

        {/* First Method */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: COLORS.white,
            alignItems: 'center',
            marginTop: 20,
            padding: 10,
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                padding: 10,
                marginRight: 10,
                backgroundColor: COLORS.gold,
              }}>
              <Image
                source={require('../../images/account_balance_wallet.png')}
                style={{objectFit: 'contain'}}
              />
            </View>
            <View>
              <Text style={{fontSize: 14, color: COLORS.black}}>
                My Reward Wallet
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 5,
                  color: COLORS.black,
                  fontWeight: '500',
                }}>
                2,500.00
              </Text>
            </View>
          </View>
          <View>
            <RadioButton value="wallet" color={COLORS.secondary} />
          </View>
        </View>

        {/* Second Method */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: COLORS.white,
            alignItems: 'center',
            marginTop: 15,
            padding: 10,
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                padding: 10,
                marginRight: 10,
                backgroundColor: COLORS.gold,
              }}>
              <Image
                source={require('../../images/credit_card.png')}
                style={{objectFit: 'contain'}}
              />
            </View>
            <View>
              <Text style={{fontSize: 14, color: COLORS.black}}>Card</Text>
              <Image
                source={require('../../images/Visa.png')}
                style={{objectFit: 'contain', width: 50, marginTop: 6}}
              />
            </View>
          </View>
          <View>
            <RadioButton value="card" color={COLORS.secondary} />
          </View>
        </View>

        {/* Third Payment */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: COLORS.white,
            alignItems: 'center',
            marginTop: 15,
            padding: 10,
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                padding: 10,
                marginRight: 10,
                backgroundColor: COLORS.gold,
              }}>
              <Image
                source={require('../../images/account_balance.png')}
                style={{objectFit: 'contain'}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 14, color: COLORS.black}}>
                Pay with Transfer
              </Text>
            </View>
          </View>
          <View>
            <RadioButton value="transfer" color={COLORS.secondary} />
          </View>
        </View>
      </RadioButton.Group>

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
            <Text>Tina Anya</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text>Pay:</Text>
              <Text style={{color: COLORS.black, marginLeft: 5}}>
                NGN 5000.00
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
            }}
            placeholder="Card Number"
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
              }}
              placeholder="Card Expiry"
            />
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.dividers,
                padding: 10,
                flex: 4,
              }}
              placeholder="CVV"
            />
          </View>
        </View>

        <Button
          text={'Pay NGN 5,000.00'}
          onPress={() => {
            modalRef.current.setVisible(false);
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
          <Text style={{fontSize: 13}}>You Pay</Text>
          <Text style={{color: COLORS.black, marginTop: 10}}>N5,000.00</Text>
        </View>
        <Button
          customStyle={{width: '45%', marginLeft: 10, bottom: 10}}
          text={'Make Payment'}
          onPress={() => modalRef.current.setVisible(true)}
        />
      </View>
    </View>
  );
};

export default GiftPaymentMethod;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.lightBorderColor,
    paddingHorizontal: 18,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
  },
  prompt: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
