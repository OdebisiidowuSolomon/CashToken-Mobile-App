/* eslint-disable prettier/prettier */
import {PermissionsAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contacts from 'react-native-contacts';

export const requestContactPermission = async ({modalRef, navigate}) => {
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
      modalRef.current.setVisible(false);
      console.log('Contact permission denied', granted);
    }
  } catch (err) {
    console.warn(err);
  }
};
