/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React, {forwardRef} from 'react';
import {RadioButton} from 'react-native-paper';
import {COLORS} from '../libs/Constants';

const AndroidDataList = ({setValue, key, value, data}, ref) => {
  console.log(value, 'value');
  return (
    <View style={{marginTop: 10}}>
      <RadioButton.Group
        onValueChange={e => {
          // console.log(e);
          setValue(e);
          setTimeout(() => {
            ref.current.setVisible(false);
          }, 400);
        }}
        value={value}>
        {data.map(item => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}
            key={item.name}>
            <Image
              style={{flex: 0.1, objectFit: 'contain'}}
              source={require('../images/Ikeja.png')}
            />
            <Text style={{flex: item.price ? 0.75 : 0.8, marginLeft: 10}}>
              {item.name}
            </Text>
            <View
              style={{
                flex: item.price ? 0.25 : 0.1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {item.price && <Text>N{item.price}</Text>}
              <RadioButton value={item} color={COLORS.secondary} />
            </View>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
};

export default forwardRef(AndroidDataList);
