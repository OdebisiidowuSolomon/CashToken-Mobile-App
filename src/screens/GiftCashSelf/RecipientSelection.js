/* eslint-disable prettier/prettier */
// RecipientSelection.js

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../libs/Constants';

const RecipientSelection = ({navigation: {navigate}, route}) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigate('Quantity')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            backgroundColor: COLORS.white,
            padding: 11,
            borderRadius: 8,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.gold,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Image
              source={require('../../images/person_2.png')}
              style={{height: 24, width: 24, objectFit: 'contain'}}
            />
          </View>
          <View style={{marginLeft: 8}}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>For Self</Text>
            <Text style={{fontSize: 12}}>Gift CashToken to yourself</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate('GiftThirdPartyChooseRecipient')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: COLORS.white,
            padding: 11,
            borderRadius: 8,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.gold,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Image
              source={require('../../images/group.png')}
              style={{height: 24, width: 24, objectFit: 'contain'}}
            />
          </View>
          <View style={{marginLeft: 8}}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              For Third Party
            </Text>
            <Text style={{fontSize: 12}}>
              Gift CashToken to friends, family or anyone
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecipientSelection;

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
});
