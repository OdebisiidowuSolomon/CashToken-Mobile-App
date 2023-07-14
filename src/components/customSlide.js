/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import {COLORS} from '../libs/Constants';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('screen');

// const slides = [
//   {
//     id: '1',
//     title: 'Reward Balance',
//     subtitle: 'View Balance',
//   },
//   {
//     id: '2',
//     title: 'CashToken Balance',
//     subtitle: 'Gift CashTokens',
//   },
// ];

const Slide = ({item: {id, title, subtitle}, showEllipse}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:
          id === '1' ? COLORS.secondaryDarkBlue : COLORS.secondaryGreen,
        paddingHorizontal: 15,
        marginHorizontal: id === '1' && 18,
        marginRight: id === '2' && 18,
        marginTop: 10,
        width: width * 0.8,
        borderRadius: 10,
      }}>
      <View style={{}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginBottom: 10, fontSize: 13, color: COLORS.white}}>
            {title}
          </Text>
          <Icon
            name="eye-off-outline"
            style={{color: COLORS.white, marginLeft: 8}}
            size={18}
          />
        </View>
        <Text style={{fontSize: 20, color: COLORS.white}}>****</Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          padding: 7,
          borderRadius: 8,color:COLORS.secondaryText
        }}>
        <Text style={{fontSize: 12,color:COLORS.secondaryText}}>{subtitle}</Text>
      </View>
      {id === '1' && showEllipse && (
        <>
          <Image
            source={require('../images/Ellipse-107.png')}
            style={{position: 'absolute', top: 9, right: 0}}
          />
          <Image
            source={require('../images/Ellipse-105.png')}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              borderTopRightRadius: 10,
            }}
          />
          <Image
            source={require('../images/Ellipse-106.png')}
            style={{position: 'absolute', bottom: 0, left: 0}}
          />
        </>
      )}
    </View>
  );
};

const CustomSlide = ({slides, showEllipse = true}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const ref = useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.14}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} showEllipse={showEllipse} />}
      />
      <Indicator currentSlideIndex={currentSlideIndex} slides={slides} />
    </View>
  );
};

export default CustomSlide;

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.black,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '80%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.black,
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '500',
    marginTop: 20,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  indicator: {
    height: 2,
    width: 14,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 50,
  },
});

const Indicator = ({currentSlideIndex, slides}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      }}>
      {/* Render indicator */}
      {slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            currentSlideIndex === index && {
              backgroundColor: COLORS.primary,
            },
          ]}
        />
      ))}
    </View>
  );
};
