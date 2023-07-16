/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import NestedScreen from './screens/NestedScreen';
// import MyScreen from '../screens/MyScreen';
import MyScreen from '../screens/MyScreen';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../libs/Constants';
import NestedScreen from '../screens/NestedScreen';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import WavyHeader from '../components/WavyHeader';
import RecipientSelection from '../screens/GiftCashSelf/RecipientSelection';
import Quantity from '../screens/GiftCashSelf/Quantity';
import GiftPaymentMethod from '../screens/GiftCashSelf/GiftPaymentMethod';
import Success from '../screens/Success';
import ChooseRecipient from '../screens/GiftCashThirdParty/ChooseRecipient';
import Contacts from '../screens/GiftCashThirdParty/Contacts';
import AirtimePurchase from '../screens/BuyAirtime/AirtimePurchase';
import ElectricityPurchase from '../screens/BuyElectricity/ElectricityPurchase';
import Summary from '../screens/BuyElectricity/Summary';
import CablePurchase from '../screens/BuyCable/CablePurchase';
import Failed from '../screens/Failed';
import DataPurchase from '../screens/BuyData/DataPurchase';
import SelectDataPlan from '../screens/BuyData/SelectDataPlan';
import WalletHomeScreen from '../screens/wallet/WalletHomeScreen';
import WithdrawReward from '../screens/wallet/WithdrawReward';
import WithdrawRewardBank from '../screens/wallet/WithdrawRewardBank';
import BankList from '../screens/wallet/BankList';
import MoreIndex from '../screens/More/MoreIndex';
import SupportCenter from '../screens/More/SupportCenter';
import ReferralIndex from '../screens/Referral/ReferralIndex';
import ReferralHistory from '../screens/Referral/ReferralHistory';
import TransactionHistory from '../screens/TransactionHistory/TransactionHistoryIndex';
import TransactionDetails from '../screens/TransactionHistory/TransactionDetails';
import Utilities from '../screens/utility/Utilities';
import TransferReward from '../screens/TransferReward/TransferRewardIndex';
import Settings from '../screens/Settings/SettingsIndex';
import ChangePassword from '../screens/Settings/ChangePassword';

const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const InnerScreenNavigator = () => {
  return (
    <Stack.Navigator>
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
                    Electricy
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

      {/* <Stack.Screen name="" component={Failed} /> */}
      <Stack.Screen name="Nested" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export {InnerScreenNavigator};
