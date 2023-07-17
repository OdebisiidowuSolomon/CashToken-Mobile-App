/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// AgentSignUp.js

import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import HeaderText from '../../components/HeaderText';
import SelectOption from '../../components/SelectOption';
import Input from '../../components/Input';
import {COLORS} from '../../libs/Constants';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AndriodPrompt from '../../components/AndriodPrompt';
import AndroidDataList from '../../components/androidDataList';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const states = [
  {name: 'Lagos'},
  {name: 'Ogun'},
  {name: 'Oyo'},
  {name: 'Bayelsa'},
  {name: 'Akwa Ibom'},
  {name: 'Calabar'},
  {name: 'Osun'},
  {name: 'Abia'},
  {name: 'Uyo'},
  {name: 'Ebonyi'},
  {name: 'Port Harcort'},
];

const LGAS = [
  {name: 'Ikori'},
  {name: 'Ikota'},
  {name: 'Alimosho'},
  {name: 'Bariga'},
  {name: 'Surulere'},
  {name: 'Ilaje'},
  {name: 'Yaba'},
];

const {height, width} = Dimensions.get('screen');

const AgentSignUp = ({navigation, route}) => {
  const [previousTab, setPreviousTab] = useState(0);
  const [activeTab, setActiveTab] = useState(1);

  const {navigate} = navigation;

  const handleProgress = () => {
    setActiveTab(prev => prev + 1);
    setPreviousTab(prev => prev + 1);
    if (activeTab === 3) {
      navigate('Agent');
    }
  };

  return (
    <ScrollView style={styles.screen}>
      <HeaderText
        text={
          activeTab === 1
            ? 'Personal Information'
            : activeTab === 2
            ? 'Business Information'
            : 'Transaction Pin'
        }
        customStyle={{fontSize: 22, fontWeight: '400'}}
      />
      <ProgressIndicator activeTab={activeTab} previousTab={previousTab} />

      {activeTab === 1 && <TabOne />}
      {activeTab === 2 && <TabTwo />}
      {activeTab === 3 && <TabThree />}

      {activeTab === 3 ? (
        <Button
          text={'Sign Up'}
          onPress={handleProgress}
          customStyle={{
            // position: 'absolute',
            marginTop: height / 2,
            bottom: 0,
            // marginTop: 450,
            // left: 18,
            // right: 18,
            // bottom: 18,
          }}
        />
      ) : (
        <Button text={'Next'} onPress={handleProgress} />
      )}
    </ScrollView>
  );
};

export default AgentSignUp;

const TabOne = () => {
  return (
    <>
      <HeaderText text={'First Name'} />
      <Input placeholder={'John'} />

      <View style={{marginTop: 15}} />
      <HeaderText text={'Last Name'} />
      <Input placeholder={'Doe'} />

      <View style={{marginTop: 15}} />
      <HeaderText text={'Email Address or Phone Number'} />
      <Input placeholder={'johndoe@gmail.com'} />

      <View style={{marginTop: 15}} />
      <HeaderText text={'Password'} />
      <Input placeholder={'*********'} />

      <View style={{marginTop: 15}} />
      <HeaderText text={'Confirm Password'} />
      <Input placeholder={'*********'} />
    </>
  );
};

const TabTwo = () => {
  const [state, setState] = useState('');
  const [LGA, setLGA] = useState('');

  const stateAndriodPromptRef = useRef();
  const LGAAndriodPromptRef = useRef();

  return (
    <>
      <HeaderText text={'Business Name'} />
      <Input placeholder={'John'} />

      <View style={{marginTop: 15}} />
      <HeaderText text={'Business Type'} />
      <Input placeholder={'Doe'} />

      <View style={{marginTop: 25}} />
      <View style={{flexDirection: 'row'}}>
        <Icon name="location-on" size={20} style={{color: COLORS.black}} />
        <HeaderText text={'Store Address'} customStyle={{marginTop: 0}} />
      </View>
      <Input placeholder={'10 Idumota ibari Road, ikota'} />

      <View style={{marginTop: 15}} />
      <HeaderText text={'Select Business State'} />
      <SelectOption
        value={'Lagos'}
        actualValue={state?.name}
        onPress={() => {
          stateAndriodPromptRef.current.setVisible(true);
        }}
        customIcon={true}
      />

      <View style={{marginTop: 15}} />
      <HeaderText text={'Select Business LGA'} />
      <SelectOption
        value={'Ikori'}
        actualValue={LGA?.name}
        onPress={() => {
          LGAAndriodPromptRef.current.setVisible(true);
        }}
        customIcon={true}
      />

      <AndriodPrompt
        ref={stateAndriodPromptRef}
        title="Select State"
        titleStyle={{marginLeft: '5%'}}>
        <AndroidDataList
          ref={stateAndriodPromptRef}
          data={states}
          setValue={setState}
          value={state}
        />
      </AndriodPrompt>

      <AndriodPrompt
        ref={LGAAndriodPromptRef}
        title="Select LGA"
        titleStyle={{marginLeft: '5%'}}>
        <AndroidDataList
          ref={LGAAndriodPromptRef}
          data={LGAS}
          setValue={setLGA}
          value={LGA}
        />
      </AndriodPrompt>
    </>
  );
};
const TabThree = () => {
  return (
    <View>
      <HeaderText text={'Create a 4 transaction pin'} />
      <CustomPin />
    </View>
  );
};

export const CustomPin = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <CustomInput />
      <CustomInput />
      <CustomInput />
      <CustomInput />
    </View>
  );
};

const CustomInput = () => {
  return (
    <Input
      customStyle={{width: '22%', fontSize: 23, textAlign: 'center'}}
      maxLength={1}
      keyboardType="number-pad"
    />
  );
};

const ProgressIndicator = ({activeTab, previousTab}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: Dimensions.get('screen').width * 0.35,
        justifyContent: 'space-between',
        marginVertical: 15,
      }}>
      <ProgressIndicatorItem
        activeTab={activeTab}
        previousTab={previousTab}
        tab={1}
      />
      <ProgressIndicatorItem
        activeTab={activeTab}
        previousTab={previousTab}
        tab={2}
      />
      <ProgressIndicatorItem
        activeTab={activeTab}
        previousTab={previousTab}
        tab={3}
      />
      <View
        style={{
          height: 1,
          backgroundColor: COLORS.black,
          position: 'absolute',
          width: '100%',
          top: '45%',
          zIndex: 1,
        }}
      />
    </View>
  );
};

const ProgressIndicatorItem = ({activeTab, previousTab, tab}) => {
  return (
    <>
      {tab < activeTab ? (
        <Icon
          name="done"
          size={18}
          style={{
            backgroundColor: COLORS.gold,
            borderRadius: 40,
            zIndex: 2,
            padding: 1,
            color: COLORS.secondary,
            borderWidth: 1,
            borderColor: COLORS.lightgray,
          }}
        />
      ) : activeTab === tab ? (
        <Text
          style={{
            color: COLORS.primary,
            height: 21,
            width: 21,
            borderRadius: 40,
            backgroundColor: COLORS.gold,
            zIndex: 2,
            paddingTop: 1,
            flexDirection: 'row',
            fontSize: 12,
            textAlign: 'center',
            fontWeight: '500',
            borderWidth: 1,
            borderColor: COLORS.lightgray,
          }}>
          {tab}
        </Text>
      ) : (
        <Text
          style={{
            color: COLORS.text,
            height: 21,
            width: 21,
            borderRadius: 40,
            backgroundColor: COLORS.dividers,
            zIndex: 2,
            paddingTop: 1,
            flexDirection: 'row',
            fontSize: 12,
            textAlign: 'center',
            fontWeight: '500',
            borderWidth: 1,
            borderColor: COLORS.lightgray,
          }}>
          {tab}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
});
