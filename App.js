/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/OnBoardingScreen.js';
import {FirstScreenNavigator} from './CustomNavigator.js';
import NestedScreen from './src/screens/NestedScreen.js';
import {View, Text, TouchableOpacity} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons.js';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import OctIcon from 'react-native-vector-icons/Octicons';

// import NestedScreen from './screens/NestedScreen';
// import MyScreen from '../screens/MyScreen';
import HomeScreen from './src/screens/HomeScreen.js';
import {COLORS} from './src/libs/Constants.js';
import Profile from './src/screens/Profile.js';
import EditProfile from './src/screens/EditProfile.js';
import RecipientSelection from './src/screens/GiftCashSelf/RecipientSelection.js';
import Quantity from './src/screens/GiftCashSelf/Quantity.js';
import GiftPaymentMethod from './src/screens/GiftCashSelf/GiftPaymentMethod.js';
import Success from './src/screens/Success.js';
import ChooseRecipient from './src/screens/GiftCashThirdParty/ChooseRecipient.js';
import Contacts from './src/screens/GiftCashThirdParty/Contacts.js';
import AirtimePurchase from './src/screens/BuyAirtime/AirtimePurchase.js';
import ElectricityPurchase from './src/screens/BuyElectricity/ElectricityPurchase.js';
import Summary from './src/screens/BuyElectricity/Summary.js';
import CablePurchase from './src/screens/BuyCable/CablePurchase.js';
import Failed from './src/screens/Failed.js';
import DataPurchase from './src/screens/BuyData/DataPurchase.js';
import SelectDataPlan from './src/screens/BuyData/SelectDataPlan.js';
import WalletHomeScreen from './src/screens/wallet/WalletHomeScreen.js';
import WithdrawReward from './src/screens/wallet/WithdrawReward.js';
import WithdrawRewardBank from './src/screens/wallet/WithdrawRewardBank.js';
import BankList from './src/screens/wallet/BankList.js';
import SupportCenter from './src/screens/More/SupportCenter.js';
import ReferralIndex from './src/screens/Referral/ReferralIndex.js';
import ReferralHistory from './src/screens/Referral/ReferralHistory.js';
import TransactionHistory from './src/screens/TransactionHistory/TransactionHistoryIndex.js';
import TransactionDetails from './src/screens/TransactionHistory/TransactionDetails.js';
import TransferReward from './src/screens/TransferReward/TransferRewardIndex.js';
import Settings from './src/screens/Settings/SettingsIndex.js';
import ChangePassword from './src/screens/Settings/ChangePassword.js';
import MyScreen from './src/screens/MyScreen.js';
import AgentLogin from './src/screens/Agent/AgentLogin.js';
import AgentSignUp from './src/screens/Agent/AgentSignUp.js';
import PartnershipSelection from './src/screens/Agent/PartnershipSelection.js';
import AgentGiftPaymentMethod from './src/screens/Agent/AgentGiftPaymentMethod.js';
import ReviewPayment from './src/screens/Agent/ReviewPayment.js';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  // const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState('nulll');

  React.useEffect(() => {
    // const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    // if (appData == null) {
    //   setIsAppFirstLaunched(true);
    //   AsyncStorage.setItem('isAppFirstLaunched', 'false');
    // } else {
    //   setIsAppFirstLaunched(false);
    // }
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingScreen"
          options={{headerShown: false}}
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="FirstScreenNavigator"
          component={FirstScreenNavigator}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WalletHomeScreen"
          component={WalletHomeScreen}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: tintColor}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: tintColor,
                      }}>
                      My Profile
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.gold},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: tintColor}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: tintColor,
                      }}>
                      Back
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="RecipientSelection"
          component={RecipientSelection}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.lightBorderColor},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: tintColor}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: tintColor,
                      }}>
                      Back
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="Quantity"
          component={Quantity}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: tintColor}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: tintColor,
                      }}>
                      Back
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="GiftPaymentMethod"
          component={GiftPaymentMethod}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.lightBorderColor},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: tintColor}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: tintColor,
                      }}>
                      Back
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.black,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <IonIcon
                      name={'close-outline'}
                      size={25}
                      style={{marginTop: 4.5, color: tintColor}}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="Failed"
          component={Failed}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.black,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <IonIcon
                      name={'close-outline'}
                      size={25}
                      style={{marginTop: 4.5, color: tintColor}}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="GiftThirdPartyChooseRecipient"
          component={ChooseRecipient}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: tintColor}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                      }}>
                      Choose Recipient
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="GiftThirdPartyContacts"
          component={Contacts}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                      }}>
                      Contacts
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="AirtimePurchase"
          component={AirtimePurchase}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({navigation}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 18,
                    paddingTop: 25,
                    paddingBottom: 15,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      e.navigation.goBack();
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: '500',
                      }}>
                      Airtime
                    </Text>
                  </TouchableOpacity>

                  <Text
                    style={{color: COLORS.secondary}}
                    onPress={() => navigation.navigate('TransactionHistory')}>
                    History
                  </Text>
                </View>
              );
            },
          })}
        />
        <Stack.Screen
          name="ElectricityPurchase"
          component={ElectricityPurchase}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({navigation}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 18,
                    paddingTop: 25,
                    paddingBottom: 15,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      e.navigation.goBack();
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: '500',
                      }}>
                      Electricity
                    </Text>
                  </TouchableOpacity>

                  <Text
                    style={{color: COLORS.secondary}}
                    onPress={() => navigation.navigate('TransactionHistory')}>
                    History
                  </Text>
                </View>
              );
            },
          })}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({navigation}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 18,
                    paddingTop: 25,
                    paddingBottom: 15,
                    backgroundColor: COLORS.dividers,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      e.navigation.goBack();
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: '500',
                      }}>
                      Summary
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            },
          })}
        />

        <Stack.Screen
          name="CablePurchase"
          component={CablePurchase}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({navigation}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 18,
                    paddingTop: 25,
                    paddingBottom: 15,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      e.navigation.goBack();
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: '500',
                      }}>
                      TV
                    </Text>
                  </TouchableOpacity>

                  <Text
                    style={{color: COLORS.secondary}}
                    onPress={() => navigation.navigate('TransactionHistory')}>
                    History
                  </Text>
                </View>
              );
            },
          })}
        />
        <Stack.Screen
          name="DataPurchase"
          component={DataPurchase}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({navigation}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 18,
                    paddingTop: 25,
                    paddingBottom: 15,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      e.navigation.goBack();
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.secondary}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: '500',
                      }}>
                      Data
                    </Text>
                  </TouchableOpacity>

                  <Text
                    style={{color: COLORS.secondary}}
                    onPress={() => navigation.navigate('TransactionHistory')}>
                    History
                  </Text>
                </View>
              );
            },
          })}
        />
        <Stack.Screen
          name="SelectDataPlan"
          component={SelectDataPlan}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({navigation}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 18,
                    paddingTop: 25,
                    paddingBottom: 15,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      e.navigation.goBack();
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: '500',
                      }}>
                      Select Data Plan
                    </Text>
                  </TouchableOpacity>

                  <Text
                    onPress={() => navigation.navigate('TransactionHistory')}
                    style={{color: COLORS.secondary}}>
                    History
                  </Text>
                </View>
              );
            },
          })}
        />
        <Stack.Screen
          name="WithdrawReward"
          component={WithdrawReward}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({navigation}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 18,
                    paddingTop: 25,
                    paddingBottom: 15,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      e.navigation.goBack();
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: '500',
                      }}>
                      Withdraw Reward
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            },
          })}
        />
        <Stack.Screen
          name="WithdrawRewardBank"
          component={WithdrawRewardBank}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({navigation}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 18,
                    paddingTop: 25,
                    paddingBottom: 15,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      e.navigation.goBack();
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        fontWeight: '500',
                      }}>
                      Withdraw Reward
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            },
          })}
        />
        <Stack.Screen
          name="BankList"
          component={BankList}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}
                  style={{padding: 15, backgroundColor: COLORS.white}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MatIcon
                      name={'close'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: '35%',
                        fontSize: 16,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Bank
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="SupportCenter"
          component={SupportCenter}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.lightBorderColor},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Support Center
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="ReferralIndex"
          component={ReferralIndex}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            header: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}
                  style={{padding: 15, backgroundColor: COLORS.white}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MatIcon
                      name={'close'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="ReferralHistory"
          component={ReferralHistory}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Referral History
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistory}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Transaction History
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="TransactionDetails"
          component={TransactionDetails}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.siteBackground},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Transaction Details
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />

        <Stack.Screen
          name="TransferReward"
          component={TransferReward}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Transfer Reward
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.siteBackground},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Settings
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Security
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />

        <Stack.Screen
          name="AgentLogin"
          component={AgentLogin}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="AgentSignUp"
          component={AgentSignUp}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="AgentGiftPaymentMethod"
          component={AgentGiftPaymentMethod}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.siteBackground},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.black}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Back
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="PartnershipSelection"
          component={PartnershipSelection}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.siteBackground},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.secondary}}
                    />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.secondary,
                        textAlign: 'center',
                      }}>
                      Back
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen
          name="ReviewPayment"
          component={ReviewPayment}
          options={e => ({
            title: '',
            headerShadowVisible: false,
            headerStyle: {backgroundColor: COLORS.white},
            headerTintColor: COLORS.secondary,
            headerLeft: ({tintColor}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    e.navigation.goBack();
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <OctIcon
                      name={'arrow-left'}
                      size={25}
                      style={{marginTop: 4.5, color: COLORS.secondary}}
                    />
                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: 20,
                        color: COLORS.black,
                        textAlign: 'center',
                      }}>
                      Review Payment
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          })}
        />

        {/* <Stack.Screen name="" component={Failed} /> */}
        {/* <Stack.Screen name="Agent" component={MyScreen} /> */}

        <Stack.Screen name="Nested" component={NestedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
