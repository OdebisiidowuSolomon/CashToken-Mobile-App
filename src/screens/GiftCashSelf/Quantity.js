/* eslint-disable prettier/prettier */
// Quantity.js

import React, {useCallback, useMemo, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../libs/Constants';
import AndriodPrompt from '../../components/AndriodPrompt';
import HeaderText from '../../components/HeaderText';
import Button from '../../components/Button';
import {useAgentStore} from '../../store/AgentStore';

const FlagData = [
  {flags: require('../../images/NIG.png'), label: 'NGN'},
  {flags: require('../../images/USA.png'), label: 'USD'},
  {flags: require('../../images/GHN.png'), label: 'GHN'},
];

const Quantity = ({navigation: {navigate}, route}) => {
  const [label, setLabel] = useState('NGN');
  const {productName, mode} = useAgentStore(state => state);

  const handleLabelChange = text => {
    androidPromptRef.current.setVisible(false);
    setLabel(text);
  };

  const androidPromptRef = useRef();

  return (
    <View style={styles.screen}>
      <View>
        {productName ? (
          <HeaderText
            text={`Enter the amount of ${productName} you want to gift?`}
          />
        ) : (
          <HeaderText text={`How much CashToken do you want to gift?`} />
        )}
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.lightBorderColor,
          paddingHorizontal: 13,
          borderRadius: 5,
        }}>
        <Text style={{color: COLORS.black}}>CashToken: </Text>
        <TextInput
          style={{
            paddingLeft: 17,
            borderRadius: 6,
            color: COLORS.text,
            flex: 1,
          }}
          placeholder="Enter Amount"
          placeholderTextColor={COLORS.default}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View
          style={{
            flex: 0.25,
            flexDirection: 'row',
            backgroundColor: COLORS.lightBorderColor,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
          }}
          onTouchStart={() => androidPromptRef.current.setVisible(true)}>
          <Text style={{color: COLORS.black, marginRight: 8}}>{label}</Text>
          <Icon name={'caret-down-sharp'} color={COLORS.black} />
        </View>
        <View style={{flex: 0.75}}>
          <TextInput
            style={{
              backgroundColor: COLORS.lightBorderColor,
              paddingLeft: 17,
              borderRadius: 6,
              color: COLORS.black,
            }}
            placeholder="00.00"
            placeholderTextColor={COLORS.text}
          />
        </View>
      </View>

      {productName ? (
        <Button
          text={'Next'}
          onPress={() => navigate('AgentGiftPaymentMethod')}
        />
      ) : mode === 'Agent' ? (
        <Button
          text={'Next'}
          onPress={() => navigate('AgentGiftPaymentMethod')}
        />
      ) : (
        <Button text={'Next'} onPress={() => navigate('GiftPaymentMethod')} />
      )}

      <AndriodPrompt ref={androidPromptRef} title={'Select Currency'}>
        <View>
          {FlagData.map(item => {
            return (
              <TouchableOpacity
                key={item.label}
                onPress={handleLabelChange.bind(this, item.label)}>
                <View style={{flexDirection: 'row', marginBottom: 13}}>
                  <Image source={item.flags} style={{objectFit: 'contain'}} />
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 14,
                      color: COLORS.black,
                      fontWeight: '400',
                    }}>
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </AndriodPrompt>
    </View>
  );
};

export default Quantity;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
  },
});
