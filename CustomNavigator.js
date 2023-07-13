/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

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
import MyScreen from './src/screens/MyScreen';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from './src/libs/Constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NestedScreen from './src/screens/NestedScreen';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile';
import WavyHeader from './src/components/WavyHeader';
import RecipientSelection from './src/screens/GiftCashSelf/RecipientSelection';
import Quantity from './src/screens/GiftCashSelf/Quantity';
import GiftPaymentMethod from './src/screens/GiftCashSelf/GiftPaymentMethod';
import Success from './src/screens/Success';
import ChooseRecipient from './src/screens/GiftCashThirdParty/ChooseRecipient';
import Contacts from './src/screens/GiftCashThirdParty/Contacts';
import AirtimePurchase from './src/screens/BuyAirtime/AirtimePurchase';
import ElectricityPurchase from './src/screens/BuyElectricity/ElectricityPurchase';
import Summary from './src/screens/BuyElectricity/Summary';
import CablePurchase from './src/screens/BuyCable/CablePurchase';
import Failed from './src/screens/Failed';
import DataPurchase from './src/screens/BuyData/DataPurchase';
import SelectDataPlan from './src/screens/BuyData/SelectDataPlan';
import WalletHomeScreen from './src/screens/wallet/WalletHomeScreen';
import WithdrawReward from './src/screens/wallet/WithdrawReward';

const Tab = createBottomTabNavigator();

const FirstScreenNavigator = () => {
  return (
    <Tab.Navigator
      inactiveColor="#ccc"
      screenOptions={{
        tabBarActiveTintColor: COLORS.secondary,
        tabBarLabelStyle: {fontSize: 14, bottom: 6},
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 70,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused, size}) => (
            <View
              style={{
                top: 1,
                paddingVertical: 14,
                borderTopWidth: focused ? 3 : 0,
                borderTopColor: color,
              }}>
              <OctIcon name="home" color={color} size={20} />
            </View>
          ),
        }}
        name="HomeNavigator"
        component={HomeNavigator}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Wallet',
          tabBarIcon: ({color, focused, size}) => (
            <View
              style={{
                top: 1,
                paddingVertical: 14,
                borderTopWidth: focused ? 3 : 0,
                borderTopColor: color,
              }}>
              <Icon name="wallet-outline" color={color} size={20} />
            </View>
          ),
        }}
        name="Wallet"
        component={WalletHomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Utilities',
          tabBarIcon: ({color, focused, size}) => (
            <View
              style={{
                top: 1,
                paddingVertical: 14,
                borderTopWidth: focused ? 3 : 0,
                borderTopColor: color,
              }}>
              <IonIcon name="receipt-outline" color={color} size={20} />
            </View>
          ),
        }}
        name="Utilities"
        component={MyScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Agent',
          tabBarIcon: ({color, focused, size}) => (
            <View
              style={{
                top: 1,
                paddingVertical: 14,
                borderTopWidth: focused ? 3 : 0,
                borderTopColor: color,
              }}>
              <MatIcon name="person-search" color={color} size={20} />
            </View>
          ),
        }}
        name="Agent"
        component={MyScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, focused, size}) => (
            <View
              style={{
                top: 1,
                paddingVertical: 14,
                borderTopWidth: focused ? 3 : 0,
                borderTopColor: color,
              }}>
              <MatIcon name="more-vert" color={color} size={20} />
            </View>
          ),
        }}
        name="More"
        component={MyScreen}
      />
    </Tab.Navigator>
  );
};

export {FirstScreenNavigator}; // Stack-Navigator for Screen 1 Tab

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
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
          headerTintColor: COLORS.secondary,
          header: ({navigation}) => {
            return (
              <View style={styles.container}>
                <WavyHeader customStyles={styles.svgCurve} />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    top: 55,
                    backgroundColor: COLORS.tertiaryCream,
                  }}>
                  <OctIcon
                    name={'arrow-left'}
                    size={25}
                    style={{marginTop: 4.5, color: COLORS.secondary}}
                  />
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        color: COLORS.secondary,
                      }}>
                      Back
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
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

                <Text style={{color: COLORS.secondary}}>History</Text>
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

                <Text style={{color: COLORS.secondary}}>History</Text>
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

                <Text style={{color: COLORS.secondary}}>History</Text>
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

                <Text style={{color: COLORS.secondary}}>History</Text>
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

                <Text style={{color: COLORS.secondary}}>History</Text>
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

                <Text style={{color: COLORS.secondary}}>History</Text>
              </View>
            );
          },
        })}
      />

      {/* <Stack.Screen name="" component={Failed} /> */}
      <Stack.Screen name="Nested" component={NestedScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 90,
    backgroundColor: '#fff',
  },
  // rest of the styles
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    // change the color property for better output
    color: '#fff',
    textAlign: 'center',
    marginTop: 15,
  },
});
