/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// ReferralIndex.js

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Share, Alert} from 'react-native';
import {COLORS} from '../../libs/Constants';
import BannerImage from '../../components/BannerImage';
import HeaderText from '../../components/HeaderText';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/AntDesign';

const ReferralIndex = ({navigation, route}) => {
  const {navigate} = navigation;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://ng.cashtoken.africa/r/JUS',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.screen}>
      <BannerImage image={require('../../images/Refer_a_friend.png')} />
      <HeaderText
        text={'Refer and Earn!'}
        customStyle={{fontSize: 22, textAlign: 'center', fontWeight: '400'}}
      />
      <Text
        style={{
          textAlign: 'center',
          paddingBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightgray,
          color: COLORS.black,
        }}>
        Refer friends, family or businesses to CashToken and earn commission
        perpetually on all their CashToken purchases and wins
      </Text>
      <HeaderText
        text={'Copy and share your referral link'}
        customStyle={{fontSize: 15, marginTop: 20}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          backgroundColor: COLORS.dividers,
          paddingVertical: 4,
          borderRadius: 10,
        }}>
        <Text style={{color: COLORS.black}}>
          https://ng.cashtoken.africa/r/JUS
        </Text>
        <Button text={'Share'} customStyle={{marginTop: 0}} onPress={onShare} />
      </View>
      <TouchableOpacity
        onPress={() => navigate('ReferralHistory')}
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 16, color: COLORS.primary, marginRight: 8}}>
          View your Referral History
        </Text>
        <Icon name="arrowright" size={20} style={{color: COLORS.primary}} />
      </TouchableOpacity>
    </View>
  );
};

export default ReferralIndex;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
