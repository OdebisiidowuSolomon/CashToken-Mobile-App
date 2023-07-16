/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// TransactionHistory.js

import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../libs/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import TransactionItem from '../../components/TransactionItem';
import OptionPrompt from '../../components/optionPrompt';

const categories1 = [
  {name: 'Airtime'},
  {name: 'Data'},
  {name: 'TV subscription'},
  {name: 'Electricity'},
];

const categories2 = [{name: 'CashToken Gifting'}, {name: 'CashToken Win'}];

const statuses = [{name: 'Successful'}, {name: 'Failed'}, {name: 'Processing'}];

const TransactionHistory = ({navigation, route}) => {
  const {navigate} = navigation;

  const [category, setCategory] = useState(null);
  const [status, setStatus] = useState(null);

  const categoryPromptRef = useRef();
  const statusPromptRef = useRef();

  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 18,
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.default,
          paddingBottom: 10,
        }}>
        <DropdownText
          text={category || 'All Categories'}
          onPress={() => categoryPromptRef.current.setVisible(true)}
        />
        <DropdownText
          text={status || 'Any Status'}
          onPress={() => statusPromptRef.current.setVisible(true)}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 18,
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.default,
        }}>
        <DropdownText text={'Feb'} textStyle={{color: COLORS.black}} />
      </View>
      <View>
        <TransactionItem
          navigate={navigate}
          image={require('../../images/CashToken-Logo-2.png')}
          green={true}
          history={true}
        />
        <TransactionItem navigate={navigate} red={true} history={true} />
        <TransactionItem navigate={navigate} green={true} history={true} />
      </View>

      <OptionPrompt
        ref={categoryPromptRef}
        onCancel={() => categoryPromptRef.current.setVisible(false)}>
        <HeadText text="All Categories" />
        <CategoryHeadText text="Bills and Utilities" />
        {categories1.map(item => (
          <CustomText
            text={item.name}
            key={item.name}
            onPress={() => {
              setCategory(item.name);
              categoryPromptRef.current.setVisible(false);
            }}
          />
        ))}

        <CategoryHeadText text="Gifting and Rewards" />
        {categories2.map(item => (
          <CustomText
            text={item.name}
            key={item.name}
            onPress={() => {
              setCategory(item.name);
              categoryPromptRef.current.setVisible(false);
            }}
          />
        ))}
      </OptionPrompt>

      <OptionPrompt
        ref={statusPromptRef}
        onCancel={() => statusPromptRef.current.setVisible(false)}>
        <HeadText text="Any Status" />
        {statuses.map(item => (
          <CustomText
            text={item.name}
            key={item.name}
            onPress={() => {
              setStatus(item.name);
              statusPromptRef.current.setVisible(false);
            }}
          />
        ))}
      </OptionPrompt>
    </View>
  );
};

export default TransactionHistory;

const CustomText = ({text, onPress}) => {
  return (
    <Text onPress={onPress} style={{color: COLORS.black, paddingTop: 15}}>
      {text}
    </Text>
  );
};

const HeadText = ({text}) => {
  return (
    <Text
      style={{
        color: COLORS.secondary,
      }}>
      {text}
    </Text>
  );
};

const CategoryHeadText = ({text}) => {
  return (
    <Text
      style={{
        borderTopWidth: 1,
        borderTopColor: COLORS.dividers,
        paddingTop: 14,
        marginTop: 14,
        color: COLORS.black,
        fontWeight: '500',
      }}>
      {text}
    </Text>
  );
};
const DropdownText = ({text, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flexDirection: 'row', marginRight: 25}}>
      <Text style={[{color: COLORS.black}, {...textStyle}]}>{text}</Text>
      <Icon
        name={'angle-down'}
        size={20}
        style={{marginLeft: 10, color: COLORS.black}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
