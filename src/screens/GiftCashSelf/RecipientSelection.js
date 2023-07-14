/* eslint-disable prettier/prettier */
// RecipientSelection.js

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../libs/Constants';

const RecipientSelection = ({navigation: {navigate}, route}) => {
  return (
    <View style={styles.screen}>
      <Selection
        navigate={navigate}
        image={require('../../images/person_2.png')}
        screen={'Quantity'}
        title={'For Self'}
        subtitle={'Gift CashToken to yourself'}
      />

      <Selection
        navigate={navigate}
        image={require('../../images/group.png')}
        screen={'GiftThirdPartyChooseRecipient'}
        title={'For Third Party'}
        subtitle={'Gift CashToken to friends, family or anyone'}
      />
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
});

const Selection = ({navigate, screen, title, subtitle, image}) => {
  return (
    <TouchableOpacity onPress={() => navigate(screen)}>
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
            source={image}
            style={{height: 24, width: 24, objectFit: 'contain'}}
          />
        </View>
        <View style={{marginLeft: 8}}>
          <Text style={{fontSize: 14, fontWeight: '500', color: COLORS.black}}>
            {title}
          </Text>
          <Text style={{fontSize: 12, color: COLORS.secondaryText}}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
