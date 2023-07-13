/* eslint-disable prettier/prettier */

import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../libs/Constants';

function ConfirmationModal(props, ref) {
  const {children, onCancel, onContinue} = props;

  const [_visible, _setVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (ref) {
      ref.current = {
        setVisible: _setVisible,
      };
    }
  }, [ref]);

  useEffect(() => {
    if (_visible) {
      setVisible(true);
      Animated.timing(animValue, {
        duration: 300,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animValue, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
      });
    }
  }, [_visible, animValue]);

  const backdropAnimStyle = {
    opacity: animValue,
  };

  const promptAnimeStyle = {
    transform: [
      {
        translateY: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
        }),
      },
    ],
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.content}>
        <Animated.View
          onTouchStart={onCancel}
          style={[styles.backdrop, StyleSheet.absoluteFill, backdropAnimStyle]}
        />

        <Animated.View style={[styles.prompt, promptAnimeStyle]}>
          <View>
            <Text
              style={{
                width: '70%',
                textAlign: 'center',
                // marginLeft: 28,
                marginHorizontal: 39,
                color: COLORS.black,
                marginBottom: 15,
              }}>
              Are you sure you want to cancel this payment?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 29,
                borderTopColor: COLORS.lightBorderColor,
                paddingTop: 10,
                borderTopWidth: 2,
              }}>
              <Text
                style={{fontWeight: '500', color: COLORS.default}}
                onPress={onCancel}>
                Cancel
              </Text>
              <Text
                style={{fontWeight: '500', color: COLORS.secondary}}
                onPress={onContinue}>
                Continue to pay
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  prompt: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2.6,
    width: Dimensions.get('window').width - 2 * 30,
    left: 30,
    backgroundColor: COLORS.white,
    borderRadius: 9,
    paddingBottom: 25,
    paddingTop: 20,
  },
});

export default forwardRef(ConfirmationModal);
