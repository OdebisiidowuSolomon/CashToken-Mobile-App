/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';


export const MyScreen = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={() => navigate('OnboardingScreen')}>MyScreen</Text>
    </SafeAreaView>
  );
};


export default MyScreen;
