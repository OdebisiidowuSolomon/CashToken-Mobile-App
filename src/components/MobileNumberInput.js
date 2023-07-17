/* eslint-disable prettier/prettier */
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS} from '../libs/Constants';
import {requestContactPermission} from '../libs/requestContactPermission';
import {Checkbox} from 'react-native-paper';
import Modal from './Modal';
import {useAgentStore} from '../store/AgentStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from './Button';

const MobileNumberInput = ({navigate}) => {
  const [checked, setChecked] = useState(false);

  const modalRef = useRef();
  const productName = useAgentStore(state => state.productName);

  const handleContactSelect = ({_modalRef, _navigate}) => {
    requestContactPermission({modalRef: _modalRef, navigate: _navigate});
  };

  const handleContactsRead = async ({_modalRef, _navigate}) => {
    const jsonValue = await AsyncStorage.getItem('my-key');
    if (jsonValue) {
      requestContactPermission({modalRef: _modalRef, navigate: _navigate});
    } else if (!jsonValue) {
      modalRef.current.setVisible(true);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.lightBorderColor,
          alignItems: 'center',
          paddingHorizontal: 10,
          borderRadius: 4,
          flex: 0.9,
        }}>
        <Text
          style={{
            borderRightWidth: 1,
            borderRightColor: COLORS.black,
            paddingRight: 5,
            color: COLORS.default,
          }}>
          +234
        </Text>
        <TextInput
          style={{flex: 1, color: COLORS.black}}
          keyboardType="number-pad"
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.gold,
          flex: 0.1,
          marginLeft: 7,
          padding: 11,
          borderRadius: 5,
        }}
        onPress={() =>
          handleContactsRead({_modalRef: modalRef, _navigate: navigate})
        }>
        <Image source={require('../images/contacts.png')} />
      </TouchableOpacity>

      <Modal
        ref={modalRef}
        toggleBtn={true}
        customStyle={{paddingBottom: 20}}
        onCancel={() => {
          modalRef.current.setVisible(false);
        }}>
        <Text
          style={{
            marginTop: 17,
            textAlign: 'center',
            fontSize: 13,
            fontWeight: '500',
            width: '79%',
            marginLeft: 30,
            color: COLORS.black,
          }}>
          Allow CashToken access your contacts
        </Text>
        <Text
          style={{
            marginTop: 14,
            textAlign: 'center',
            fontSize: 13,
            fontWeight: '400',
            color: COLORS.secondaryText,
          }}>
          You will be able to view all your contacts on the{' '}
          {productName || 'Cashtoken'} platform
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 7}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={e => setChecked(!checked)}
            color={COLORS.secondary}
          />
          <Text style={{fontSize: 12, color: COLORS.secondaryText}}>
            I have read and agree to the
            <Text style={{color: COLORS.secondary}}> Privacy Policy</Text>
          </Text>
        </View>
        <Button
          text={'Access'}
          onPress={() =>
            handleContactSelect({_modalRef: modalRef, _navigate: navigate})
          }
        />
      </Modal>
    </View>
  );
};

export default MobileNumberInput;
