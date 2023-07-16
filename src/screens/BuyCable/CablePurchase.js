/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// CablePurchase.js

import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderText from '../../components/HeaderText';
import SelectOptionWithImage from '../../components/SelectOptionWithImage';
import {COLORS} from '../../libs/Constants';
import AndriodPrompt from '../../components/AndriodPrompt';
import Input from '../../components/Input';
import SelectOption from '../../components/SelectOption';
import AndroidDataList from '../../components/androidDataList';
import Button from '../../components/Button';

const providers = [
  {name: 'DSTV'},
  {name: 'GOTV'},
  {name: 'STARTIMES'},
  {name: 'Infinity TV Payments'},
  {name: 'Kwese TV'},
  {name: 'Montage Cable TV'},
  {name: 'yTv Smart Payment'},
  {name: 'TSTV'},
  {name: 'TrendTV'},
];

const packages = [
  {name: 'Premium', price: '21,000'},
  {name: 'Asia Add-on', price: '21,000'},
  {name: 'Box Office', price: '21,000'},
  {name: 'Compact', price: '21,000'},
  {name: 'Confam', price: '21,000'},
  {name: 'French Plus', price: '21,000'},
  {name: 'Padi', price: '21,000'},
  {name: 'Great Wall', price: '21,000'},
  {name: 'Yanga', price: '21,000'},
];

const CablePurchase = ({navigation: {navigate}, route}) => {
  const [provider, setProvider] = useState({name: 'TrendTV'});
  //   const [_package, setPackage] = useState('Premium');
  const [_package, setPackage] = useState({name: 'Premium', price: '21,000'});

  const providerAndriodPromptRef = useRef();
  const subAndriodPromptRef = useRef();
  const packageAndriodPromptRef = useRef();

  return (
    <View style={styles.screen}>
      <HeaderText text={'Cable Provider'} />
      <SelectOptionWithImage
        image={require('../../images/Dstv.png')}
        onPress={() => providerAndriodPromptRef.current.setVisible(true)}
        value={provider.name}
      />

      <View style={{marginTop: 10}}>
        <HeaderText text={'Smartcard Number'} />
        <Input placeholder={'Enter DSTV Smartcard Number'} />
      </View>

      <View style={{marginTop: 10}}>
        <HeaderText text={'Subscription Period'} />
        <SelectOption
          value={'Select a Plan'}
          onPress={() => subAndriodPromptRef.current.setVisible(true)}
        />
      </View>

      <HeaderText text={'Package'} />
      <SelectOption
        value={_package.name}
        textStyle={{color: COLORS.black}}
        leftText={_package.price}
        onPress={() => packageAndriodPromptRef.current.setVisible(true)}
      />

      <Button text={'Proceed'} onPress={() => navigate('Summary')} />

      <AndriodPrompt
        ref={providerAndriodPromptRef}
        title="Select a Provider"
        titleStyle={{marginLeft: '5%'}}
        topStyle={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.dividers,
        }}
        promptStyle={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
        <AndroidDataList
          data={providers}
          setValue={setProvider}
          value={provider}
          ref={providerAndriodPromptRef}
        />
      </AndriodPrompt>

      <AndriodPrompt ref={subAndriodPromptRef}></AndriodPrompt>

      <AndriodPrompt
        ref={packageAndriodPromptRef}
        title="Select a Plan"
        topStyle={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.dividers,
        }}
        promptStyle={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}
        titleStyle={{marginLeft: '5%'}}>
        <AndroidDataList
          data={packages}
          setValue={setPackage}
          value={_package}
          ref={packageAndriodPromptRef}
        />
      </AndriodPrompt>
    </View>
  );
};

export default CablePurchase;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
