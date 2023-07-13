/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// DataPurchase.js

import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import PhoneContactInput from '../../components/PhoneContactInput';
import NetworkProviderList from '../../components/NetworkProviderList';

import Icon from 'react-native-vector-icons/Feather';
import NairaInput from '../../components/NairaInput';
import Button from '../../components/Button';

const DataPurchase = ({navigation: {navigate}, route}) => {
  const [provider, setProvider] = useState();
  const [_package, setPackage] = useState(null);

  useEffect(() => {
    if (route.params) {
      setPackage(route.params);
    }
  }, [route.params]);

  console.log(route);

  return (
    <View style={styles.screen}>
      <HeaderText text={'Mobile Number'} />
      <PhoneContactInput />

      <HeaderText text={'Select Network Provider'} />
      <NetworkProviderList provider={provider} setProvider={setProvider} />

      <HeaderText text={'Select Data Plan'} />
      <TouchableOpacity
        onPress={() => navigate('SelectDataPlan')}
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.dividers,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <TextInput
          style={{
            flex: 0.9,
            paddingHorizontal: 14,
            color: _package?.size ? COLORS.black : COLORS.default,
          }}
          placeholder="Select a Plan"
          value={_package?.size ? _package?.size + ' MB' : null}
          editable={false}
        />
        <Icon name="chevron-down" size={24} style={{flex: 0.1}} />
      </TouchableOpacity>

      <HeaderText text={'Amount'} />
      <NairaInput amount={_package?.amount} />

      <Button text={'Proceed'} onPress={() => navigate('Summary')} />
    </View>
  );
};

export default DataPurchase;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
