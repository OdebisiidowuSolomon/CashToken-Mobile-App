/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// ChangePassword.js

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ChangePassword = ({navigation, route}) => {
  const {navigate} = navigation;

  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmNewPassword] = useState(null);

  const validate = () => {
    return (
      currentPassword?.trim().length > 0 &&
      newPassword?.trim().length > 0 &&
      confirmNewPassword?.trim().length > 0 &&
      confirmNewPassword?.trim() === newPassword?.trim()
    );
  };

  validate();

  return (
    <View style={styles.screen}>
      <HeaderText
        text={'Change Password'}
        customStyle={{textAlign: 'center', fontSize: 16}}
      />
      <HeaderText
        text={'Complete the form below to create a new password'}
        customStyle={{textAlign: 'center', color: COLORS.text, fontSize: 12}}
      />
      <HeaderText text={'Enter current password'} />
      <Input value={currentPassword} onChangeText={setCurrentPassword} />

      <HeaderText text={'Enter new password'} />
      <Input value={newPassword} onChangeText={setNewPassword} />

      <HeaderText text={'Confirm new password'} />
      <Input value={confirmNewPassword} onChangeText={setConfirmNewPassword} />

      <Button text={'Update Password'} disableColor={!validate()} />
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
