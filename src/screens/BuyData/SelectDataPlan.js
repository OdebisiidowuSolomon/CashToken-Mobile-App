/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// SelectDataPlan.js

import React, {useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../libs/Constants';
import ContactSearchInput from '../../components/ContactSearchInput';
import DataPlanTab from '../../components/DataPlanTab';

const SelectDataPlan = ({navigation: {navigate}, route}) => {
  const inputRef = useRef();

  return (
    <View style={styles.screen}>
      <ContactSearchInput
        handleTextChange={() => {}}
        search={''}
        ref={inputRef}
        placeholder={'Search'}
      />
      <DataPlanTab
        tabOne={<TabOneContent navigate={navigate} />}
        tabTwo={<Text>Tab Two Content</Text>}
        tabThree={<Text>Tab Three Content</Text>}
        tabFour={<Text>Tab Four Content</Text>}
      />
    </View>
  );
};

export default SelectDataPlan;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    // paddingHorizontal: 18,
  },
});

const TabOneContent = ({navigate}) => {
  return (
    <View>
      <TabOneItem navigate={navigate} amount={'100'} size={'100'} />
      <TabOneItem navigate={navigate} amount={'350'} size={'400'} />
      <TabOneItem navigate={navigate} amount={'500'} size={'700'} />
    </View>
  );
};

const TabOneItem = ({navigate, amount, size}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('DataPurchase', {size, amount})}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.dividers,
        padding: 15,
      }}>
      <Text style={{color: COLORS.black}}>{size} MB</Text>
      <Text style={{color: COLORS.black}}>N{amount}</Text>
    </TouchableOpacity>
  );
};
