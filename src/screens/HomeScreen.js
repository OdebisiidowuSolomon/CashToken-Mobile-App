/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React,{useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../libs/Constants';
import CustomSlide from '../components/customSlide';
import QuickLink from '../components/QuickLink';
import { useAgentStore } from '../store/AgentStore';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Reward Balance',
    subtitle: 'View Balance',
    path: '',
  },
  {
    id: '2',
    title: 'CashToken Balance',
    subtitle: 'Gift CashTokens',
    path: 'RecipientSelection',
  },
];

const QLinks = [
  {
    id: 1,
    image: require('../images/CashToken-Logo-2.png'),
    text: 'Gift CashTokens',
    route: 'RecipientSelection',
  },
  {
    id: 2,
    image: require('../images/phonelink_ring.png'),
    text: 'Buy Airtime',
    route: 'AirtimePurchase',
  },
  {
    id: 3,
    image: require('../images/electrical_services.png'),
    text: 'Buy Power',
    route: 'ElectricityPurchase',
  },
  {
    id: 4,
    image: require('../images/connected_tv.png'),
    text: 'Recharge Cable',
    route: 'CablePurchase',
  },
  {
    id: 5,
    image: require('../images/buyData.png'),
    text: 'Buy Data',
    route: 'DataPurchase',
  },
  {
    id: 6,
    image: require('../images/local_mall.png'),
    text: 'Shop on Marketplace',
  },
  {id: 7, image: require('../images/qr_code_scanner.png'), text: 'Scan'},
  {
    id: 8,
    image: require('../images/Agent_icon.png'),
    text: 'Become an Agent',
    route: 'AgentLogin',
  },
];

export const HomeScreen = ({navigation: {navigate}}) => {
  const user = false;

  const {setMode, mode} = useAgentStore();

  useEffect(() => {
    setMode('Home');
  }, [setMode]);

  console.log(mode);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View>
        <FlatList
          data={QLinks}
          keyExtractor={item => item.id}
          numColumns={4}
          contentContainerStyle={{}}
          columnWrapperStyle={{justifyContent: 'center'}}
          ItemSeparatorComponent={() => <View style={{height: 7}} />}
          renderItem={item => (
            <QuickLink item={item.item} navigate={navigate} />
          )}
          ListHeaderComponent={
            <HeaderComponent user={user} navigate={navigate} />
          }
          ListFooterComponent={<FooterComponent navigate={navigate} />}
        />
      </View>
      <Text onPress={() => navigate('OnboardingScreen')}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const HeaderComponent = function HeaderComponent({user, navigate}) {
  return (
    <>
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
            <Text
              style={{
                fontSize: 9,
                letterSpacing: 5,
                color: COLORS.secondaryText,
              }}>
              REWARD
            </Text>
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
          <TouchableOpacity
            onPress={() =>
              navigate('Profile', {msg: 'Hello from Home to person'})
            }>
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
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingHorizontal: 18}}>
        <Text style={{fontSize: 22, color: COLORS.text}}>
          Hello{user ? ' Tina,' : '!'}
        </Text>
      </View>
      <View>
        <CustomSlide navigate={navigate} slides={slides} showEllipse={false} />
      </View>
      <View style={{marginTop: 10, paddingHorizontal: 18}}>
        <Text style={{fontSize: 15, fontWeight: '500', color: COLORS.text}}>
          Quick Links
        </Text>
      </View>
    </>
  );
};

const FooterComponent = ({navigate}) => {
  return (
    <View style={{paddingHorizontal: 18}}>
      <TouchableOpacity
        onPress={() => navigate('ReferralIndex')}
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
          <Text style={{fontWeight: '500', color: COLORS.black}}>
            Refer and Earn
          </Text>
          <Text style={{color: COLORS.secondaryText}}>
            Invite your friends to join CashToken
          </Text>
        </View>
        <View>
          <MatIcon
            name="chevron-right"
            size={30}
            style={{color: COLORS.secondaryText}}
          />
        </View>
      </TouchableOpacity>

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
        <Image
          source={require('../images/Rectangle-2021.png')}
          style={{width: '100%', borderRadius: 20}}
        />
      </View>
      {/* <Text onPress={() => navigate('OnboardingScreen')}>HomeScreen</Text> */}
    </View>
  );
};
