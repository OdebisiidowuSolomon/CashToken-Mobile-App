/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

// const COLORS = {primary: '#282534', white: '#fff'};

const COLORS = {
  primary: '#A67A0F',
  secondary: '#D7A52B',
  white: '#FFFFFF',
  black: '#000000',
};

const slides = [
  {
    id: '1',
    image: require('../images/Connected-world-amico.png'),
    title: 'Gift CashTokens on the Go',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
  },
  {
    id: '2',
    image: require('../images/Wallet-rafiki.png'),
    title: 'Easy Reward Withdrawal',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
  },
  {
    id: '3',
    image: require('../images/Banknote-amico.png'),
    title: 'Earn Extra Income',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
  },
  {
    id: '4',
    image: require('../images/Ecommerce-campaign-rafiki.png'),
    title: 'Shop and Pay Bills',
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '60%', width, resizeMode: 'contain'}}
      />
      <View style={{width, alignItems: 'center'}}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const SkipButton = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.btn,
          {
            backgroundColor: 'transparent',
            alignSelf: 'flex-end',
          },
        ]}
        onPress={skip}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: COLORS.primary,
          }}>
          {currentSlideIndex !== slides.length - 1 && 'SKIP'}
        </Text>
      </TouchableOpacity>
    );
  };

  const Indicator = () => {
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

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.15,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Render buttons */}
        <View style={{marginBottom: 20, marginTop: 15}}>
          {currentSlideIndex === slides.length - 1 ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* Indicator container */}
              <Indicator />
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.replace('FirstScreenNavigator')}>
                <LinearGradient
                  colors={[COLORS.secondary, COLORS.primary]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={[styles.btn, {width: 'auto', padding: 11}]}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: COLORS.white,
                    }}>
                    GET STARTED
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* Indicator container */}
              <Indicator />
              <View style={{width: 15}} />
              <TouchableOpacity onPress={goToNextSlide} activeOpacity={0.8}>
                <LinearGradient
                  style={[styles.btn]}
                  colors={[COLORS.secondary, COLORS.primary]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: COLORS.white,
                    }}>
                    NEXT
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <SkipButton />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.85}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

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
    paddingHorizontal:30,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 50,
  },
  btn: {
    // flex: 1,
    width: 90,
    height: 50,
    borderRadius: 5,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;
