/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// SupportCenter.js

import React, {useRef} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import SelectableCard from '../../components/SelectableCard';
import Modal from '../../components/Modal';
import BannerImage from '../../components/BannerImage';

const {width, height} = Dimensions.get('screen');

const SupportCenter = ({navigation, route}) => {
  const {navigate} = navigation;

  const modalRef = useRef();

  return (
    <View style={styles.screen}>
      <BannerImage image={require('../../images/Contact-us-amico.png')} />
      <SelectableCard
        image={require('../../images/Chat.png')}
        title={'Live Chat'}
        onPress={() => modalRef.current.setVisible(true)}
      />
      <SelectableCard
        image={require('../../images/Mail.png')}
        title={'Email Us'}
        onPress={() => modalRef.current.setVisible(true)}
      />
      <SelectableCard
        image={require('../../images/Phone.png')}
        title={'Call Center'}
        onPress={() => modalRef.current.setVisible(true)}
      />
      <SelectableCard
        image={require('../../images/Whatsapp.png')}
        title={'Whatsapp'}
        onPress={() => modalRef.current.setVisible(true)}
      />
      <Modal
        ref={modalRef}
        toggleBtn={true}
        onCancel={() => modalRef.current.setVisible(false)}
        customStyle={{top: width / 1.3}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../images/ad_units.png')} />
          <Text style={{color: COLORS.text}}>0801156789</Text>
        </View>
        <Text
          style={{
            width: '55%',
            marginLeft: '22.5%',
            marginTop: 15,
            textAlign: 'center',
            color: COLORS.text,
          }}>
          Click on the number above to call customer service
        </Text>
      </Modal>
    </View>
  );
};

export default SupportCenter;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.lightBorderColor,
    paddingHorizontal: 18,
  },
});
