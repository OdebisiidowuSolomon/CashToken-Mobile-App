/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../libs/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from 'react-native-vector-icons/Ionicons';

const InputOption = ({onPress, value, textStyle, leftText, actualValue, customIcon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        backgroundColor: COLORS.dividers,
        padding: 11,
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <Text
        style={[
          {
            flex: 0.9,
            paddingLeft: 8,
            color: actualValue ? COLORS.text : COLORS.default,
          },
          {...textStyle},
        ]}>
        {actualValue || value}
      </Text>
      <View>
        {leftText && <Text style={{color: COLORS.text}}>{leftText}</Text>}
      </View>
      {customIcon ? (
        <CustomIcon
          name="chevron-down-sharp"
          size={29}
          style={{flex: 0.1, color: COLORS.text}}
        />
      ) : (
        <Icon
          name="chevron-right"
          size={29}
          style={{flex: 0.1, color: COLORS.text}}
        />
      )}
    </TouchableOpacity>
  );
};

export default InputOption;
