/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {COLORS} from '../libs/Constants';

const TabUI = props => {
  const {tabOne, tabTwo} = props;

  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab 1' && styles.activeTab]}
          onPress={() => handleTabPress('Tab 1')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Tab 1' && {color: COLORS.primary},
            ]}>
            Recent Beneficiary
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab 2' && styles.activeTab]}
          onPress={() => handleTabPress('Tab 2')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Tab 2' && {color: COLORS.primary},
            ]}>
            Saved Beneficiary
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content for each tab */}
      {activeTab === 'Tab 1' && <View>{tabOne}</View>}
      {activeTab === 'Tab 2' && <View style={styles.tabContent}>{tabTwo}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 8,
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: COLORS.secondary,
  },
  tabText: {
    fontSize: 17,
    color: COLORS.text,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 1,
  },
});

export default TabUI;
