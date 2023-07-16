/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// Settings.js

import React, {useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import SelectableCard from '../../components/SelectableCard';
import AndriodPrompt from '../../components/AndriodPrompt';

const Settings = ({navigation, route}) => {
  const {navigate} = navigation;

  const LangPromptRef = useRef();

  return (
    <View style={styles.screen}>
      <View style={{marginTop: 10}} />
      <Container>
        <SettingHeader
          image={require('../../images/profileImage.png')}
          title={'Profile'}
        />
        <SelectableCard
          onPress={() => navigate('Profile')}
          image={require('../../images/person_2.png')}
          title={'Justina Anya'}
        />
      </Container>
      <Container>
        <SettingHeader
          image={require('../../images/tune.png')}
          title={'Preferences'}
        />
        <SelectableCard
          image={require('../../images/translate.png')}
          title={'Language'}
          onPress={() => LangPromptRef.current.setVisible(true)}
        />
      </Container>
      <Container>
        <SettingHeader
          image={require('../../images/shield.png')}
          title={'Security'}
        />
        <SelectableCard
          image={require('../../images/lock.png')}
          title={'Change Password'}
          onPress={() => navigate('ChangePassword')}
        />
      </Container>

      <AndriodPrompt
        ref={LangPromptRef}
        title="Choose a Language"
        titleStyle={{marginLeft: '2%'}}>
        <PromptText
          onPress={() => LangPromptRef.current.setVisible(false)}
          title="English (US)"
        />
        <PromptText
          onPress={() => LangPromptRef.current.setVisible(false)}
          title="French"
        />
      </AndriodPrompt>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.siteBackground,
    paddingHorizontal: 18,
  },
});

const SettingHeader = ({image, title}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={image} />
      <Text style={{marginLeft: 10, fontSize: 16, color: COLORS.black}}>
        {title}
      </Text>
    </View>
  );
};

const Container = ({children}) => {
  return <View style={{marginBottom: 20}}>{children}</View>;
};

const PromptText = ({title, onPress}) => {
  return (
    <Text
      style={{marginTop: 15, color: COLORS.black, paddingLeft: 10}}
      onPress={onPress}>
      {title}
    </Text>
  );
};
