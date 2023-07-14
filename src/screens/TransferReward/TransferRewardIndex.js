/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// TransferReward.js

import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import InputOption from '../../components/SelectOption';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AndriodPrompt from '../../components/AndriodPrompt';
import AndroidDataList from '../../components/androidDataList';

const sourceWallets = [{name: 'Reward Wallet'}];

const desWallets = [{name: 'Reward Wallet'}, {name: 'Gifting Wallet'}];

const TransferReward = ({navigation, route}) => {
  const [source, setSource] = useState(null);
  const [des, setDes] = useState(null);

  const {navigate} = navigation;

  const walletAndriodPromptRef = useRef();
  const DesAndriodPromptRef = useRef();

  return (
    <View style={styles.screen}>
      <HeaderText
        text={'Transfer between wallets'}
        customStyle={{color: COLORS.secondaryText, textAlign: 'center'}}
      />

      <HeaderText text={'Which wallet do you want to transfer from?'} />
      <InputOption
        value={source?.name || 'Choose source'}
        textStyle={{color: source?.name && COLORS.black}}
        onPress={() => walletAndriodPromptRef.current.setVisible(true)}
      />

      <HeaderText text={'Choose Destination'} />
      <InputOption
        value={des?.name || 'Select'}
        textStyle={{color: des?.name && COLORS.black}}
        onPress={() => DesAndriodPromptRef.current.setVisible(true)}
      />

      <HeaderText text={'Enter Amount'} />
      <Input placeholder={'Enter Amount'} />

      <View style={{flexDirection: 'row'}}>
        <HeaderText text={'Narration'} />
        <HeaderText
          text={'(Optional)'}
          customStyle={{
            color: COLORS.secondaryText,
            fontWeight: '100',
            marginLeft: 7,
          }}
        />
      </View>
      <Input placeholder={'Enter a Narration'} />

      <Button text={'Proceed'} onPress={() => navigate('Success')} />

      <AndriodPrompt
        ref={walletAndriodPromptRef}
        title="Choose a wallet"
        titleStyle={{marginLeft: '5%'}}>
        <AndroidDataList
          data={sourceWallets}
          ref={walletAndriodPromptRef}
          setValue={setSource}
          value={source}
        />
      </AndriodPrompt>
      <AndriodPrompt
        ref={DesAndriodPromptRef}
        title="Choose a wallet"
        titleStyle={{marginLeft: '5%'}}>
        <AndroidDataList
          data={desWallets}
          ref={DesAndriodPromptRef}
          setValue={setDes}
          value={des}
        />
      </AndriodPrompt>
    </View>
  );
};

export default TransferReward;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
