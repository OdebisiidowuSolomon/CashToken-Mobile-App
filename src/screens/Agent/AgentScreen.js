/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../libs/Constants';
import CustomSlide from '../../components/customSlide';
import QuickLink from '../../components/QuickLink';
import {useAgentStore} from '../../store/AgentStore';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Sales Wallet Balance',
    subtitle: 'View Balance',
    backgroundColor: COLORS.primary,
    path: '',
    // showEyeIcon: false,
  },
  {
    id: '2',
    title: 'Sales Token Balance',
    subtitle: 'Gift CashTokens',
    backgroundColor: COLORS.secondaryText,
    path: 'RecipientSelection',
    showEyeIcon: false,
  },
];

const QLinks = [
  {
    id: 1,
    image: require('../../images/CashToken-Logo-2.png'),
    text: 'Gift CashTokens',
    route: 'GiftThirdPartyChooseRecipient',
    QLinkFunction: () => ({
      name: 'AgentCashToken',
      paymentMethod: 1,
      BTNsuccessMessage: 'View Balance',
    }),
  },
  {
    id: 2,
    image: require('../../images/CashToken-Logo-2.png'),
    text: 'Gift EkoTokens',
    route: 'PartnershipSelection',
  },
  {
    id: 3,
    image: require('../../images/phonelink_ring.png'),
    text: 'Buy Airtime',
    route: 'AirtimePurchase',
    QLinkFunction: () => ({
      name: 'AgentAirtime',
      paymentMethod: 3,
      BTNsuccessMessage: 'View Balance',
    }),
  },
  {
    id: 4,
    image: require('../../images/phonelink_ring.png'),
    text: 'Recharge Cable',
    route: 'CablePurchase',
    QLinkFunction: () => ({
      name: 'AgentCable',
      paymentMethod: 1,
      BTNsuccessMessage: 'View CashToken Balance',
    }),
  },
  {
    id: 5,
    image: require('../../images/buyData.png'),
    text: 'Buy Data',
    route: 'DataPurchase',
    QLinkFunction: () => ({
      name: 'AgentData',
      paymentMethod: 1,
      BTNsuccessMessage: 'View Sales Wallet Balance',
    }),
  },
  {
    id: 6,
    image: require('../../images/local_mall.png'),
    text: 'Shop on Marketplace',
  },
  {id: 7, image: require('../../images/qr_code_scanner.png'), text: 'Scan'},
  {
    id: 8,
    image: require('../../images/Agent_icon.png'),
    text: 'Become a Super Agent',
    route: 'AgentLogin',
  },
  {
    id: 9,
    image: require('../../images/quiz.png'),
    text: 'Education Products',
    route: '',
  },
  {
    id: 10,
    image: require('../../images/electrical_services.png'),
    text: 'Buy Power',
    route: 'ElectricityPurchase',
    QLinkFunction: () => ({
      name: 'AgentElectricity',
      paymentMethod: 1,
      BTNsuccessMessage: 'View Sales Token Balance',
    }),
  },
];

export const AgentScreen = ({navigation: {navigate}}) => {
  const user = false;

  const {mode} = useAgentStore();

  useEffect(() => {
    console.log('Me Agemt', mode);
  }, [mode]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View>
        <FlatList
          data={QLinks.slice(0, 8)}
          keyExtractor={item => item.id}
          numColumns={4}
          key={1}
          columnWrapperStyle={{marginHorizontal: 14}}
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
    </SafeAreaView>
  );
};

export default AgentScreen;

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
            source={require('../../images/CashToken-Logo-2.png')}
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
        <Text style={{fontSize: 22, color: COLORS.text}}>John Doe</Text>
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
  const [showAll, setShowAll] = useState(false);
  return (
    <View style={{paddingHorizontal: 18}}>
      <View style={{marginTop: 9, marginBottom: 15}}>
        {showAll ? (
          <View style={{flexDirection: 'row'}}>
            {QLinks.slice(-2).map(item => (
              <QuickLink key={item.id} item={item} navigate={navigate} />
            ))}
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setShowAll(true)}
            style={{alignItems: 'center'}}>
            <Text style={{color: COLORS.text}}>Show All</Text>
            <Icon
              name={'chevron-down'}
              size={23}
              style={{color: COLORS.text}}
            />
          </TouchableOpacity>
        )}
      </View>
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
          source={require('../../images/Rectangle-2021.png')}
          style={{width: '100%', borderRadius: 20}}
        />
      </View>
      {/* <Text onPress={() => navigate('OnboardingScreen')}>AgentScreen</Text> */}
    </View>
  );
};
