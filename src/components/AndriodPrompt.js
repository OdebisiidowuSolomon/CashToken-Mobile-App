/* eslint-disable prettier/prettier */

import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../libs/Constants';

function AndroidPrompt(props, ref) {
  const {
    title,
    children,
    onCancel = () => _setVisible(false),
    showBackIcon = true,
    titleStyle,
    promptStyle,
    topStyle,
  } = props;

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

        <Animated.View style={[styles.prompt, promptStyle, promptAnimeStyle]}>
          <View style={[styles.top, {...topStyle}]}>
            <TouchableOpacity
              onPress={onCancel}
              style={{paddingHorizontal: 10}}>
              {showBackIcon && (
                <Icon
                  name={'angle-left'}
                  style={{color: COLORS.black}}
                  size={25}
                />
              )}
            </TouchableOpacity>
            {title && (
              <Text
                style={[
                  {marginLeft: '30%', fontSize: 14, color: COLORS.black},
                  {...titleStyle},
                ]}>
                {title}
              </Text>
            )}
          </View>
          <View style={{paddingHorizontal: 25}}>{children}</View>
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
    bottom: 0,
    width: Dimensions.get('screen').width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingBottom: 40,
    paddingTop: 15,
    // paddingHorizontal: 25,
  },
  hint: {
    fontSize: 24,
    marginBottom: 20,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 25,
  },
});

export default forwardRef(AndroidPrompt);
