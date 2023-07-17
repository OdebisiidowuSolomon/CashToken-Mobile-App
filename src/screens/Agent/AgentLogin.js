/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// AgentLogin.js

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import HeaderText from '../../components/HeaderText';
import Input from '../../components/Input';
import {COLORS} from '../../libs/Constants';
import Button from '../../components/Button';

const AgentLogin = ({navigation, route}) => {
  const {navigate} = navigation;

  return (
    <View style={styles.screen}>
      <HeaderText text={'Enter your Email or Phone Number'} />
      <Input placeholder={'John Doe'} />

      <View style={{marginTop: 15}} />

      <HeaderText text={'Password'} />
      <Input placeholder={'*********'} />

      <Text
        style={{
          borderBottomWidth: 1,
          borderBottomColor: COLORS.text,
          alignSelf: 'flex-start',
          marginTop: 15,
          fontSize: 13,
          color: COLORS.text,
        }}>
        Forgot password?
      </Text>

      <Button text={'Log In'} />
      <View
        style={{flexDirection: 'row', marginTop: 15, justifyContent: 'center'}}>
        <Text
          style={{
            color: COLORS.text,
          }}>
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={() => navigate('AgentSignUp')}>
          <Text
            style={{
              fontWeight: '500',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.text,
              color: COLORS.text,
              marginLeft: 5,
            }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AgentLogin;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
