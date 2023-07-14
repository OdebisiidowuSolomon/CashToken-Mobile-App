/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// ChooseRecipient.js

import React, {useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Contacts from 'react-native-contacts';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {COLORS} from '../../libs/Constants';
import Button from '../../components/Button';
import SelectableCard from '../../components/SelectableCard';
import CustomText from '../../components/CustomText';
import HeaderText from '../../components/HeaderText';
import TabUI from '../../components/CustomTab';
import Modal from '../../components/Modal';

const ChooseRecipient = ({navigation: {navigate}, route}) => {
  const [checked, setChecked] = useState(false);
  const modalRef = useRef();

  const requestContactPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        ],
        {
          title: 'Contacts Permission',
          message: 'This app would like to view your contacts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (
        granted['android.permission.READ_CONTACTS'] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('You can access contact');
        const jsonValue = await AsyncStorage.getItem('my-key');
        modalRef.current.setVisible(false);
        if (JSON.parse(jsonValue)) {
          navigate('GiftThirdPartyContacts');
        } else {
          Contacts.getAll()
            .then(async contacts => {
              try {
                const value = JSON.stringify(contacts);
                await AsyncStorage.setItem('my-key', value);
                navigate('GiftThirdPartyContacts');
              } catch (e) {
                console.log(e);
                // saving error
              }
            })
            .catch(e => {
              console.log(e);
            });
        }
      } else {
        console.log('Contact permission denied', granted);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.screen}>
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingHorizontal: 18,
        }}>
        <HeaderText text={'Enter Phone Number'} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 52,
            backgroundColor: COLORS.lightBorderColor,
            paddingVertical: 5,
            marginBottom: 25,
            borderRadius: 7,
          }}>
          <TextInput
            style={{
              width: '70%',
              paddingHorizontal: 15,
              color: COLORS.black,
            }}
            placeholder="08146807502"
            placeholderTextColor={COLORS.default}
          />
          <Button
            text={'Next'}
            customStyle={{
              height: '100%',
              width: '30%',
              marginTop: 0,
            }}
            innerStyle={{
              paddingVertical: 10,
            }}
          />
        </View>
      </View>

      <TabUI
        tabOne={
          <View style={{paddingHorizontal: 18}}>
            <SelectableCard
              image={require('../../images/Recipient_icon.png')}
              title={'Chioma Obi'}
              subtitle={'080688496735'}
              onPress={() => {}}
              showLeftIcon={false}
              imageStyle={{
                borderRadius: 50,
                backgroundColor: COLORS.lightBorderColor,
              }}
            />
          </View>
        }
      />

      <View style={{paddingHorizontal: 18, backgroundColor: styles.dividers}}>
        <CustomText text={'Contacts'} />
        <SelectableCard
          image={require('../../images/contacts.png')}
          title={'Gift Cashtoken to your contacts'}
          subtitle={'Find contacts to gift CashToken'}
          onPress={() => {
            modalRef.current.setVisible(true);
          }}
        />

        <CustomText text={'QR Code'} />
        <SelectableCard
          image={require('../../images/qr_code_scanner.png')}
          title={'Gift Cashtoken using QR Code'}
          subtitle={'Scan your recipients QR to gift '}
          onPress={() => {}}
        />
      </View>

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
          You will be able to view all your contacts on the CashToken platform
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
        <Button text={'Access'} onPress={requestContactPermission} />
      </Modal>
    </View>
  );
};

export default ChooseRecipient;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.dividers,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
  },
});
