/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// AirtimePurchase.js

import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HeaderText from '../../components/HeaderText';
import {COLORS} from '../../libs/Constants';
import Button from '../../components/Button';
import AndriodPrompt from '../../components/AndriodPrompt';
import {Checkbox} from 'react-native-paper';
import ConfirmationModal from '../../components/confirmationModal';
import AmountInput from '../../components/AmountInput';
import {useAgentStore} from '../../store/AgentStore';
import MobileNumberInput from '../../components/MobileNumberInput';

const NetworkProviderData = [
  {id: 1, img: require('../../images/Mtn_logo.png')},
  {id: 2, img: require('../../images/Glo_logo.png')},
  {id: 3, img: require('../../images/airtel_logo.png')},
  {id: 4, img: require('../../images/9_mobile_logo.png')},
];

const width = Dimensions.get('screen').width;

const AirtimePurchase = ({navigation, route}) => {
  const [provider, setProvider] = useState();
  const [showWithdrawReward, setShowWithdrawReward] = useState(false);

  const {productName, mode} = useAgentStore();

  const {navigate} = navigation;

  useEffect(() => {
    if (route?.params?.msg === 'WithdrawReward') {
      setShowWithdrawReward(true);
    } else {
      setShowWithdrawReward(false);
    }
  }, [route]);

  const andriodPromptRef = useRef();
  const confirmationModalRef = useRef();

  const handleCancel = () => {
    andriodPromptRef.current.setVisible(false);
    confirmationModalRef.current.setVisible(false);
  };

  useEffect(() => {
    return (
      andriodPromptRef.current.setVisible(false) &&
      confirmationModalRef.current.setVisible(false)
    );
  });

  return (
    <View style={styles.screen}>
      <HeaderText text={'Mobile Number'} />
      <MobileNumberInput navigate={navigate} />

      <HeaderText text={'Select Network Provider'} />
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        {NetworkProviderData.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setProvider(item.id)}
              style={{
                width: width / 5,
                backgroundColor: COLORS.lightBorderColor,
                alignItems: 'center',
                paddingVertical: 6,
                marginRight: 13,
                borderRadius: 6,
                borderWidth: 1,
                borderColor:
                  provider === item.id ? COLORS.secondary : 'transparent',
              }}>
              <Image source={item.img} key={item.id} />
            </TouchableOpacity>
          );
        })}
      </View>

      <HeaderText text={'Enter Amount'} />
      <AmountInput />

      {showWithdrawReward ? (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button text={'Back'} whiteColor onPress={() => navigation.pop()} />
          <Button text={'Next'} onPress={() => navigate('Summary')} />
        </View>
      ) : (
        <Button
          text={'Proceed'}
          onPress={() => andriodPromptRef.current.setVisible(true)}
        />
      )}

      <AndriodPrompt
        ref={andriodPromptRef}
        onCancel={() => confirmationModalRef.current.setVisible(true)}>
        <Text style={{textAlign: 'center', fontSize: 22, color: COLORS.text}}>
          ₦ 2,000.00
        </Text>
        <PromptList LeftText={'Amount'} RightText={'2,000.00'} />
        <PromptList LeftText={'Product Name'} RightText={'Airtime/MTN'} />
        <PromptList LeftText={'Cashback you earn'} RightText={'₦ 2.00'} />

        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.dividers,
            borderRadius: 5,
            marginTop: 20,
          }}>
          <View style={{paddingHorizontal: 10}}>
            <PromptList
              LeftText={'Payment Method'}
              RightText={<Icon name="chevron-right" size={29} />}
              leftStyle={{color: COLORS.text}}
            />
          </View>
          <AirtimeSelectableCard
            image={require('../../images/account_balance_wallet.png')}
            imageStyle={{backgroundColor: COLORS.gold}}
            leftIcon={<Checkbox status={'checked'} color={COLORS.secondary} />}
            subtitle={
              'Insufficient balance. Please choose a different payment method or gift CashToken to top-up your reward wallet.'
            }
            title={'Reward Wallet (0.00)'}
            showLeftIcon={false}
          />
        </View>
        <Button
          text={'Confirm'}
          onPress={() => {
            navigate(
              mode === 'Agent' ? 'AgentGiftPaymentMethod' : 'GiftPaymentMethod',
            );
            andriodPromptRef.current.setVisible(false);
            confirmationModalRef.current.setVisible(false);
          }}
        />
      </AndriodPrompt>
      <ConfirmationModal
        ref={confirmationModalRef}
        onCancel={handleCancel}
        onContinue={() => confirmationModalRef.current.setVisible(false)}
      />
    </View>
  );
};

export default AirtimePurchase;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});

const PromptList = ({LeftText, RightText, leftStyle}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 13,
        alignItems: 'center',
      }}>
      <Text style={[{color: COLORS.black}, {...leftStyle}]}>{LeftText}</Text>
      <Text style={{color: COLORS.black}}>{RightText}</Text>
    </View>
  );
};

const AirtimeSelectableCard = ({
  image,
  title,
  subtitle,
  onPress,
  showLeftIcon = true,
  imageStyle,
  leftIcon,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          marginTop: 10,
          backgroundColor: COLORS.white,
          padding: 10,
          borderTopWidth: 1,
          borderTopColor: COLORS.dividers,
        }}>
        <View
          style={[
            {
              padding: 10,
              backgroundColor: COLORS.gold,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              flex: 0.1,
              alignSelf: 'flex-start',
            },
            {...imageStyle},
          ]}>
          <Image source={image} />
        </View>
        <View style={{marginLeft: 13, flex: 0.8}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: COLORS.text,
            }}>
            {title}
          </Text>
          <Text style={{fontSize: 12, marginTop: 3, color: COLORS.black}}>
            {subtitle}
          </Text>
          <View style={{marginTop: 9, flexDirection: 'row'}}>
            <Text style={{color: COLORS.secondary}}>Gift CashToken</Text>
            <Icon
              name="chevron-right"
              size={20}
              style={{color: COLORS.secondary}}
            />
          </View>
        </View>
        <View style={{flex: 0.1}}>{leftIcon}</View>
      </View>
    </TouchableOpacity>
  );
};
