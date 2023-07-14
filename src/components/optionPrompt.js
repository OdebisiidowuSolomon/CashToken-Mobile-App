/* eslint-disable prettier/prettier */

import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {View, Modal, StyleSheet, Dimensions, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../libs/Constants';

function OptionPrompt(props, ref) {
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

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.content}>
        <Animated.View
          onTouchStart={onCancel}
          style={[styles.backdrop, StyleSheet.absoluteFill, backdropAnimStyle]}
        />

        <Animated.View style={[styles.prompt, {...customStyle}]}>
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
  prompt: {
    position: 'absolute',
    top: Dimensions.get('window').height / 8,
    width: Dimensions.get('window').width,
    // width: Dimensions.get('window').width - 2 * 20,
    // left: 20,
    // borderRadius: 9,
    backgroundColor: COLORS.white,
    paddingBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 14,
  },
});

export default forwardRef(OptionPrompt);
