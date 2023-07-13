/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../libs/Constants';

const DataPlanTab = props => {
  const {tabOne, tabTwo, tabThree, tabFour} = props;

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
              activeTab === 'Tab 1' && {color: COLORS.secondary},
            ]}>
            Daily
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab 2' && styles.activeTab]}
          onPress={() => handleTabPress('Tab 2')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Tab 2' && {color: COLORS.secondary},
            ]}>
            Weekly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab 3' && styles.activeTab]}
          onPress={() => handleTabPress('Tab 3')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Tab 3' && {color: COLORS.secondary},
            ]}>
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab 4' && styles.activeTab]}
          onPress={() => handleTabPress('Tab 4')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Tab 4' && {color: COLORS.secondary},
            ]}>
            2 Months
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content for each tab */}
      {activeTab === 'Tab 1' && <View>{tabOne}</View>}
      {activeTab === 'Tab 2' && <View style={styles.tabContent}>{tabTwo}</View>}
      {activeTab === 'Tab 3' && (
        <View style={styles.tabContent}>{tabThree}</View>
      )}
      {activeTab === 'Tab 4' && (
        <View style={styles.tabContent}>{tabFour}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
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
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },
  tabText: {
    color: COLORS.text,
    fontWeight: '500',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 1,
  },
});

export default DataPlanTab;
