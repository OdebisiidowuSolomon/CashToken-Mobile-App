/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheTet, TouchableOpacity, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../libs/Constants';

const ReferralTab = ({tabOne, tabTwo}) => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <ScrollView style={{marginTop: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20}}>
        <TabItem
          title={'Active Invitees (5)'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tab={'tabOne'}
        />
        <TabItem
          title={'Inactive Invitees (5)'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tab={'tabTwo'}
        />
      </View>
      <>{activeTab === 'tabOne' ? tabOne : tabTwo}</>
    </ScrollView>
  );
};

export default ReferralTab;

const TabItem = ({title, activeTab, setActiveTab, tab}) => {
  return (
    <TouchableOpacity onPress={() => setActiveTab(tab)}>
      <Text
        style={{
          fontSize: 16,
          color: tab === activeTab ? COLORS.black : COLORS.default,
        }}>
        {title}
      </Text>
      {tab === activeTab && (
        <Text
          style={{
            alignSelf: 'center',
            width: 9,
            height: 9,
            marginTop: 3,
            borderRadius: 50,
            backgroundColor: COLORS.secondary,
          }}
        />
      )}
    </TouchableOpacity>
  );
};
