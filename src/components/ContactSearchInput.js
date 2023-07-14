/* eslint-disable prettier/prettier */
import {TextInput, View} from 'react-native';
import React,{forwardRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../libs/Constants';

const ContactSearchInput = ({search, handleTextChange,placeholder}, ref) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.lightBorderColor,
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginHorizontal: 18,
      }}>
      <Icon name={'search-outline'} style={{color: COLORS.black}} size={24} />
      <TextInput
        ref={ref}
        placeholder={placeholder}
        value={search}
        onChangeText={handleTextChange}
        style={{color:COLORS.secondaryText}}
        placeholderTextColor={COLORS.secondaryText}
      />
    </View>
  );
};

export default forwardRef(ContactSearchInput);
