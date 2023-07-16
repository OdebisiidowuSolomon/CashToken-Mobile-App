/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// TransactionDetails.js

import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {COLORS} from '../../libs/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TransactionDetails = ({navigation, route}) => {
  const {navigate} = navigation;

  return (
    <ScrollView style={styles.screen}>
      <Card>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../images/Mtn_logo.png')} />
          <Text style={{marginTop: 6, color: COLORS.text}}>MTN</Text>
        </View>
        <TextItem Ltext={'Amount'} Rtext={'N 2,000'} />
        <TextItem Ltext={'Status'} Rtext={'Successful'} />
        <TextItem Ltext={'Fee'} Rtext={'0.00'} />
      </Card>

      <Card>
        <TextItem Ltext={'CashToken'} Rtext={'0.00'} />
        <TextItem Ltext={'CashBack'} Rtext={'0.00'} />
        <TextItem Ltext={'Voucher'} Rtext={'0.00'} />
      </Card>

      <Card>
        <TextItem Ltext={'Recipient Mobile'} Rtext={'08145678402'} />
        <TextItem Ltext={'Transaction Type'} Rtext={'Top up Airtime '} />
        <TextItem Ltext={'Payment Method'} Rtext={'Reward Wallet'} />
        <TextItem
          Ltext={'Transaction ID'}
          Rtext={'tebdjhje573889'}
          copy={true}
        />
        <TextItem Ltext={'Transaction Date'} Rtext={'1:30, Feb 20, 2023'} />
      </Card>

      <Text style={{textAlign: 'center', marginTop: 15, color: COLORS.text}}>
        Need help?{' '}
        <Text style={{color: COLORS.secondary}}>
          Contact Support
        </Text>
      </Text>
    </ScrollView>
  );
};

export default TransactionDetails;

const Card = ({children}) => {
  return (
    <View
      style={{
        paddingHorizontal: 18,
        paddingVertical: 23,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
      }}>
      {children}
    </View>
  );
};

const TextItem = ({Ltext, Rtext, copy}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <Text style={{color: COLORS.text}}>{Ltext}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: COLORS.text}}>{Rtext}</Text>
        {copy && (
          <Icon size={20} name={'content-copy'} style={{marginLeft: 5,color: COLORS.text}} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.siteBackground,
    paddingHorizontal: 18,
    paddingTop: 15,
  },
});
