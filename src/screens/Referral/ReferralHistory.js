/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// ReferralHistory.js

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../libs/Constants';
import ReferralTab from '../../components/ReferralTab';
import Icon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('screen');

const ReferralHistory = ({navigation, route}) => {
  const {navigate} = navigation;

  return (
    <ScrollView style={styles.screen}>
      <BlackCard>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{color: COLORS.white}}>Commission</Text>
          <Text style={{color: COLORS.white}}>Invitees</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}>
          <Text style={{color: COLORS.white, fontSize: 22}}>
            <Text style={{fontSize: 14}}>N</Text>0
          </Text>
          <Text style={{color: COLORS.white, fontSize: 22}}>0</Text>
        </View>
      </BlackCard>

      <ReferralTab tabOne={<TabOne />} tabTwo={<TabTwo />} />
    </ScrollView>
  );
};

export default ReferralHistory;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});

const BlackCard = ({children}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.secondaryDarkBlue,
        padding: 15,
        marginTop: 10,
        width: width * 0.9,
        borderRadius: 10,
      }}>
      {children}
    </View>
  );
};

const TabOne = () => {
  return (
    <View>
      <Invitee active={true} />
      <Invitee active={true} />
      <Invitee active={true} />
      <Invitee active={true} />
      <Invitee active={true} />
      <View>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 25,
            marginTop: 10,
            fontSize: 12,
            color: COLORS.default,
          }}>
          only showing record for the past 6 months
        </Text>
      </View>
    </View>
  );
};

const TabTwo = () => {
  return (
    <View>
      <Invitee />
      <Invitee />
      <Invitee />
      <Invitee />
      <Invitee />
    </View>
  );
};

const Invitee = ({active}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: COLORS.dividers,
        padding: 13,
        paddingTop: 8,
        borderRadius: 10,
        marginBottom: 15,
      }}>
      <InviteeItem Ltext={'Username'} Rtext={'Anya Nnenna Justina'} />
      <InviteeItem Ltext={'Joined'} Rtext={'March 20, 2023'} />
      {active && (
        <>
          <InviteeItem Ltext={'Commissions'} Rtext={'N5,000'} />
          <InviteeItem Ltext={'Transaction Date'} Rtext={'March 20, 2023'} />
        </>
      )}
    </View>
  );
};

const InviteeItem = ({Ltext, Rtext}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 5}}>
      <Text>{Ltext}:</Text>
      <Text style={{marginLeft: 7}}>{Rtext}</Text>
    </View>
  );
};

const EmptyState = ({infoText}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.gold,
          padding: 10,
          borderRadius: 10,
        }}>
        <Icon
          name={'info'}
          size={13}
          style={{flex: 0.05, alignSelf: 'flex-start'}}
        />
        <Text
          style={{
            color: COLORS.black,
            fontSize: 11,
            flex: 0.95,
            marginLeft: 5,
          }}>
          {infoText}
        </Text>
      </View>
      <View
        style={{
          marginTop: 70,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            padding: 25,
            backgroundColor: COLORS.gold,
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <Image source={require('../../images/RectangleSearch.png')} />
        </View>
        <Text style={{width: '70%', textAlign: 'center'}}>
          The more friends you refer the more commissions you earn!
        </Text>
      </View>
    </View>
  );
};
