/* eslint-disable prettier/prettier */
// NestedScreen.js

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../libs/Constants';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';

const Profile = ({navigation: {navigate}, route}) => {
  return (
    <ScrollView style={styles.screen}>
      <View>
        {/* First section */}
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightgray,
            borderRadius: 10,
            padding: 10,
            marginTop: 15,
            marginHorizontal: 18,
          }}>
          <View
            style={{
              justifyContent: 'center',
              paddingTop: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: COLORS.gold,
                borderRadius: 100,
                padding: 18,
              }}>
              <Image
                source={require('../images/person_2.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
            <Text
              style={{fontSize: 23, marginVertical: 7, color: COLORS.black}}>
              Tina Anya
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              borderTopWidth: 1,
              borderTopColor: COLORS.lightgray,
              marginTop: 13,
              marginBottom: 10,
              paddingTop: 15,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                  marginBottom: 6,
                  color: COLORS.secondaryText,
                }}>
                Account Type
              </Text>
              <Text style={{fontSize: 14, color: COLORS.black}}>
                Individual
              </Text>
            </View>
            <View style={{left: 100}}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                  marginBottom: 6,
                  color: COLORS.secondaryText,
                }}>
                My QR code
              </Text>
              <IonIcon
                name={'ios-qr-code'}
                size={20}
                color={COLORS.secondary}
              />
            </View>
          </View>
        </View>

        {/* Second section */}
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightgray,
            borderRadius: 10,
            padding: 15,
            marginVertical: 20,
            marginHorizontal: 18,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              paddingBottom: 15,
              borderBottomColor: COLORS.lightBorderColor,
            }}>
            <Text style={{color:COLORS.black}}>Full Name</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 30,color:COLORS.black}}>Tina Anya</Text>
              <TouchableOpacity onPress={() => navigate('EditProfile')}>
                <MatComIcon
                  name="pencil-outline"
                  size={18}
                  style={{color: COLORS.default}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              paddingVertical: 15,
              borderBottomColor: COLORS.lightBorderColor,
            }}>
            <Text style={{color:COLORS.black}}>Email</Text>
            <Text style={{color:COLORS.black}}>Justnnenna@gmail.com</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              paddingVertical: 15,
              borderBottomColor: COLORS.lightBorderColor,
            }}>
            <Text style={{color:COLORS.black}}>Phone Number</Text>
            <Text style={{color:COLORS.black}}>0809996847646</Text>
          </View>
        </View>

        {/* Third section */}
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightgray,
            borderRadius: 10,
            padding: 15,
            marginHorizontal: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{}}>
            <Text style={[styles.title, {color:COLORS.black}]}>History</Text>
            <Text style={[styles.subtitle, {color:COLORS.secondaryText}]}>See all my transaction</Text>
          </View>
          <View>
            <FIcon name={'chevron-right'} size={24} style={{color:COLORS.black}} />
          </View>
        </View>

        {/* Fourth section */}
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightgray,
            borderRadius: 10,
            padding: 15,
            marginHorizontal: 18,
            marginVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{}}>
            <Text style={[styles.title,{color:COLORS.black}]}>Refer and Earn</Text>
            <Text style={[styles.subtitle,{color:COLORS.secondaryText}]}>
              Invite your friends to join CashToken
            </Text>
          </View>
          <View>
            <FIcon name={'chevron-right'} size={24} style={{color:COLORS.black}} />
          </View>
        </View>

        {/* Fifth section */}
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightgray,
            borderRadius: 10,
            padding: 15,
            marginHorizontal: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{}}>
            <Text style={[styles.title, {color:COLORS.black}]}>Agent’s Dashboard</Text>
            <Text style={[styles.subtitle, {color:COLORS.secondaryText}]}>
              Invite your friends to join CashToken
            </Text>
          </View>
          <View>
            <FIcon name={'chevron-right'} size={24} style={{color:COLORS.black}} />
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <Text style={{fontSize: 16, color: COLORS.error}}>Log Out</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {fontSize: 14, fontWeight: '500'},
  subtitle: {fontSize: 12, marginTop: 2},
});
