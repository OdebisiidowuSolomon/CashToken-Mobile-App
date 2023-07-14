/* eslint-disable prettier/prettier */

import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {View, Modal, StyleSheet, Dimensions, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../libs/Constants';

function CustomModal(props, ref) {
  const {children, toggleBtn = false, onCancel, customStyle} = props;

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

        <Animated.View
          style={[styles.prompt, promptAnimeStyle, {...customStyle}]}>
          {toggleBtn ? (
            <Icon
              name={'close'}
              size={19}
              style={[styles.promptBtn2]}
              onTouchStart={onCancel}
            />
          ) : (
            <Icon
              name={'close'}
              size={16}
              style={[styles.promptBtn1]}
              onTouchStart={onCancel}
            />
          )}
          <View>{children}</View>
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
  promptBtn1: {
    height: 27,
    width: 27,
    right: 10,
    top: -35,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    padding: 5,
    position: 'absolute',
    color: COLORS.black,
  },
  promptBtn2: {
    height: 27,
    width: 27,
    right: 10,
    top: 7,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    padding: 5,
    color: COLORS.black,
    position: 'absolute',
  },
  prompt: {
    position: 'absolute',
    top: Dimensions.get('window').height / 3 - 70,
    width: Dimensions.get('window').width - 2 * 20,
    left: 20,
    backgroundColor: COLORS.white,
    borderRadius: 9,
    paddingBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 14,
  },
});

export default forwardRef(CustomModal);
