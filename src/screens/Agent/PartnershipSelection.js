/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// PartnershipSelection.js

import React, {useState} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import HeaderText from '../../components/HeaderText';
import InputOption from '../../components/SelectOption';
import {COLORS} from '../../libs/Constants';
import InputOptionWithIcon from '../../components/SelectOptionWithImage';
import {RadioButton} from 'react-native-paper';
import {useAgentStore} from '../../store/AgentStore';

const PartnershipSelection = ({navigation, route}) => {
  const [showProducts, setShowProducts] = useState(false);
  const {navigate} = navigation;

  return (
    <View style={styles.screen}>
      {showProducts ? (
        <>
          <PackageSelection navigate={navigate} />
        </>
      ) : (
        <>
          <HeaderText text={'Select Partnership product'} />
          <InputOption
            customIcon={true}
            value={'Select product'}
            onPress={() => setShowProducts(true)}
          />
        </>
      )}
    </View>
  );
};

export default PartnershipSelection;

const PackageSelection = ({navigate}) => {
  const [value, setValue] = useState();
  const AgentStore = useAgentStore(state => state);

  const handleSelect = e => {
    setValue(e);
    AgentStore.setProductName(e);
    navigate('GiftThirdPartyChooseRecipient');
  };

  return (
    <RadioButton.Group onValueChange={handleSelect} value={value}>
      <PackageSelectionItem
        image={require('../../images/person_2.png')}
        title={'Eko Token'}
      />
      <PackageSelectionItem
        image={require('../../images/person_2.png')}
        title={'Sunshine Token'}
      />
    </RadioButton.Group>
  );
};

export const PackageSelectionItem = ({
  image,
  title,
  subtitle,
  subtitleStyle,
}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flex: 0.1}}>
        <Image source={image} style={{width: 24}} />
      </View>
      <View style={{flex: 0.8, marginLeft: 12}}>
        <Text style={{color: COLORS.text}}>{title}</Text>
        {subtitle && (
          <Text style={[{color: COLORS.text}, {...subtitleStyle}]}>
            {subtitle}
          </Text>
        )}
      </View>
      <View style={{flex: 0.1}}>
        <RadioButton value={title} color={COLORS.secondary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.siteBackground,
    paddingHorizontal: 18,
  },
});
