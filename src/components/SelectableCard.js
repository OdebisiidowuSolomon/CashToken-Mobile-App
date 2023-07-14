/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {COLORS} from '../libs/Constants';

const SelectableCard = ({
  image,
  title,
  subtitle,
  onPress,
  showLeftIcon = true,
  imageStyle,
  leftIcon,
  customStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            backgroundColor: COLORS.white,
            padding: 11,
            borderRadius: 8,
          },
          {...customStyle},
        ]}>
        <View
          style={[
            {
              width: 40,
              height: 40,
              backgroundColor: COLORS.gold,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            },
            {...imageStyle},
          ]}>
          <Image
            source={image}
            style={{height: 24, width: 24, objectFit: 'contain'}}
          />
        </View>
        <View style={{marginLeft: 13}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: COLORS.text,
              width: '100%',
            }}>
            {title}
          </Text>
          {subtitle && (
            <Text style={{fontSize: 12, marginTop: 3,color:COLORS.secondaryText}}>{subtitle}</Text>
          )}
        </View>
        {showLeftIcon ? (
          <View style={{marginLeft: 'auto'}}>
            <Icon name="chevron-right" size={25} />
          </View>
        ) : (
          <>{leftIcon}</>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SelectableCard;

const styles = StyleSheet.create({});
