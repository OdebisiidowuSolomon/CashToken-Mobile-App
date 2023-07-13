/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');
const COLORS = {
  primary: '#A67A0F',
  secondary: '#D7A52B',
  gold: '#F7F2E7',
  white: '#FFFFFF',
  text: '#25282B',
  black: '#000000',
  secondaryDarkBlue: '#212738',
  secondaryGreen: '#1F7A8C',
};
const slides = [
  {
    id: '1',
    title: 'Reward Balance',
    subtitle: 'View Balance',
  },
  {
    id: '2',
    title: 'CashToken Balance',
    subtitle: 'Gift CashTokens',
  },
];

const QLinks = [
  {
    id: 1,
    image: require('../images/CashToken-Logo-2.png'),
    text: 'Gift CashTokens',
  },
  {id: 2, image: require('../images/phonelink_ring.png'), text: 'Buy Airtime'},
  {id: 3, image: require('../images/CashToken-Logo-2.png'), text: 'Buy Power'},
  {
    id: 4,
    image: require('../images/CashToken-Logo-2.png'),
    text: 'Recharge Cable',
  },
  {id: 5, image: require('../images/CashToken-Logo-2.png'), text: 'Buy Data'},
  {
    id: 6,
    image: require('../images/CashToken-Logo-2.png'),
    text: 'Shop on Marketplace',
  },
  {id: 7, image: require('../images/CashToken-Logo-2.png'), text: 'Scan'},
  {
    id: 8,
    image: require('../images/CashToken-Logo-2.png'),
    text: 'Become an Agent',
  },
];

const Slide = ({item: {id, title, subtitle}}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:
          id === '1' ? COLORS.secondaryDarkBlue : COLORS.secondaryGreen,
        paddingHorizontal: 15,
        // marginRight: id === '1' && 14,
        marginHorizontal: id === '1' && 14,
        marginTop: 10,
        width: width * 0.8,
        borderRadius: 10,
      }}>
      <View style={{}}>
        <Text style={{marginBottom: 10, fontSize: 13, color: COLORS.white}}>
          {title}
        </Text>
        <Text style={{fontSize: 20, color: COLORS.white}}>****</Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          padding: 7,
          borderRadius: 8,
        }}>
        <Text style={{fontSize: 12}}>{subtitle}</Text>
      </View>
    </View>
  );
};

const QuickLink = ({item}) => {
  return (
    <View>
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
        <Text style={{fontSize: 11, textAlign: 'center', maxWidth: '77%'}}>
          {item?.text}
        </Text>
      </View>
    </View>
  );
};

export const HomeScreen = ({navigation: {navigate}}) => {
  const user = false;
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const ref = React.useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.primary} />
      {/* <ScrollView> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 30,
          paddingBottom: 19,
          paddingHorizontal: 18,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../images/CashToken-Logo-2.png')}
            style={{
              width: 40,
              height: 40,
              resizeMode: 'contain',
              objectFit: 'contain',
            }}
          />
          <View style={{marginLeft: 3}}>
            <Text
              style={{fontSize: 11, fontWeight: '500', color: COLORS.black}}>
              CASHTOKEN
            </Text>
            <Text style={{fontSize: 9, letterSpacing: 5}}>REWARD</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MatIcon
            name="notifications-none"
            size={25}
            style={{
              backgroundColor: COLORS.gold,
              color: COLORS.primary,
              padding: 5,
              borderRadius: 50,
            }}
          />
          <MatIcon
            name="person"
            size={25}
            style={{
              backgroundColor: COLORS.gold,
              marginLeft: 15,
              color: COLORS.primary,
              padding: 5,
              borderRadius: 50,
            }}
          />
        </View>
      </View>

      <View style={{paddingHorizontal: 18}}>
        <Text style={{fontSize: 22, color: COLORS.text}}>
          Hello{user ? ' Tina,' : '!'}
        </Text>
      </View>

      <View>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{height: height * 0.13}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({item}) => <Slide item={item} />}
        />
        <Indicator />
      </View>

      <View style={{marginTop: 10, paddingHorizontal: 18}}>
        <Text style={{fontSize: 15, fontWeight: '500', color: COLORS.text}}>
          Quick Links
        </Text>
        <FlatList
          data={QLinks}
          keyExtractor={item => item.id}
          numColumns={4}
          contentContainerStyle={{
            height: height,
            //   alignItems: 'center',
            //   justifyContent: 'space-between',
          }}
          ItemSeparatorComponent={() => <View style={{height: 7}} />}
          renderItem={item => <QuickLink item={item.item} />}
          ListFooterComponent={<FooterComponent />}
        />
      </View>

      {/* <View style={{paddingHorizontal: 18}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 7,
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
              borderRadius: 7,
              elevation: 3,
              shadowColor: '#ccc',
            }}>
            <View>
              <Text style={{fontWeight: '800', color: COLORS.black}}>
                Refer and Earn
              </Text>
              <Text>Invite your friends to join CashToken</Text>
            </View>
            <View>
              <MatIcon name="chevron-right" size={30} />
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: COLORS.text,
                marginBottom: 6,
              }}>
              Featured
            </Text>
            <Image source={require('../images/Rectangle-2021.png')} style={{width:'100%', borderRadius:10}} />
          </View>
        </View> */}

      <Text onPress={() => navigate('OnboardingScreen')}>HomeScreen</Text>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

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

const FooterComponent = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 7,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
          borderRadius: 7,
          elevation: 3,
          shadowColor: '#ccc',
        }}>
        <View>
          <Text style={{fontWeight: '800', color: COLORS.black}}>
            Refer and Earn
          </Text>
          <Text>Invite your friends to join CashToken</Text>
        </View>
        <View>
          <MatIcon name="chevron-right" size={30} />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: COLORS.text,
            marginBottom: 10,
          }}>
          Featured
        </Text>
        <Image source={require('../images/Rectangle-2021.png')} />
      </View>
      <Text onPress={() => 'OnboardingScreen'}>HomeScreen</Text>
    </View>
  );
};
