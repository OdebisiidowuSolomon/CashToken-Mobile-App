/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../libs/Constants';
import {useAgentStore} from '../store/AgentStore';

const {width, height} = Dimensions.get('screen');

const QuickLink = ({item, navigate, route}) => {
  const {setFlow, flow} = useAgentStore();

  const handlePress = () => {
    if (item.route) {
      navigate(item.route);
    } else {
      return;
    }

    if (item.QLinkFunction) {
      setFlow(item.QLinkFunction());
      console.log(flow);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          width: width / 4.5,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 2,
        }}>
        <View
          style={{
            backgroundColor: COLORS.gold,
            width: 70,
            height: 70,
            marginVertical: 7,
            borderRadius: 7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={item.image}
            style={{
              width: 40,
              height: 40,
              resizeMode: 'contain',
              objectFit: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 11,
            textAlign: 'center',
            maxWidth: '77%',
            color: COLORS.secondaryText,
          }}>
          {item?.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuickLink;
