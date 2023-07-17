/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// ElectricityPurchase.js

import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AmountInput from '../../components/AmountInput';
import Button from '../../components/Button';
import AndriodPrompt from '../../components/AndriodPrompt';
import AndroidDataList from '../../components/androidDataList';
import SelectOptionWithImage from '../../components/SelectOptionWithImage';

const packageArray = ['Prepaid', 'Post Paid'];

const ElectricityProviders = [
  {name: 'Abuja Electricity'},
  {name: 'Ikeja Disco'},
  {name: 'Ibadan Electricity'},
  {name: 'Jos Electricity'},
  {name: 'Kaduna Electricity'},
  {name: 'Port Harcort'},
  {name: 'Eko Electricity'},
  {name: 'Enugu Electricity'},
];

const ElectricityPurchase = ({navigation: {navigate}, route}) => {
  const [packageTitle, setPackageTitle] = useState(null);
  const [electricityProvider, setElectricityProvider] = useState('Ikeja Disco');

  const andriodPromptRef = useRef();

  return (
    <View style={styles.screen}>
      <HeaderText text={'Electricity Provider'} />
      <SelectOptionWithImage
        image={require('../../images/Ikeja.png')}
        onPress={() => andriodPromptRef.current.setVisible(true)}
        value={electricityProvider.name || 'Ikeja Disco'}
      />
      <View style={{marginTop: 10}}>
        <HeaderText text={'Meter Number'} />
        <TextInput
          style={{
            backgroundColor: COLORS.dividers,
            paddingHorizontal: 11,
            borderRadius: 5,
            color: COLORS.text,
          }}
          placeholder="Enter Meter Number"
          placeholderTextColor={COLORS.default}
        />
      </View>

      <View style={{marginTop: 10}}>
        <HeaderText text={'Select Package'} />
        <View style={{flexDirection: 'row'}}>
          {packageArray.map(title => (
            <PackageItem
              key={title}
              title={title}
              onPress={() => setPackageTitle(title)}
              packageTitle={packageTitle}
            />
          ))}
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <HeaderText text={'Enter Amount'} />
        <AmountInput />
        <Button text={'Proceed'} onPress={() => navigate('Summary')} />
      </View>

      <AndriodPrompt
        ref={andriodPromptRef}
        showBackIcon={false}
        titleStyle={{marginLeft: 0, textAlign: 'center', fontWeight: '500'}}
        promptStyle={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}
        title={'Select a Company'}>
        <AndroidDataList
          data={ElectricityProviders}
          ref={andriodPromptRef}
          setValue={setElectricityProvider}
          value={electricityProvider}
        />
      </AndriodPrompt>
    </View>
  );
};

export default ElectricityPurchase;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});

const PackageItem = ({title, onPress, packageTitle}) => {
  return (
    <Text
      style={{
        flex: 0.5,
        textAlign: 'center',
        paddingVertical: 15,
        marginRight: 13,
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: packageTitle === title ? COLORS.gold : COLORS.dividers,
        color: packageTitle === title ? COLORS.primary : COLORS.black,
        borderColor: packageTitle === title ? COLORS.secondary : 'transparent',
      }}
      onPress={onPress}>
      {title}
    </Text>
  );
};
