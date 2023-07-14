/* eslint-disable prettier/prettier */
// EditProfile.js

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../libs/Constants';

const EditProfile = ({navigation, route}) => {
  const {navigate} = navigation;

  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');

  const [isFNameFocused, setIsFNameFocused] = useState(false);
  const [isLNameFocused, setIsLNameFocused] = useState(false);

  const handleSave = () => {
    Alert.alert('Info', 'Success!');
  };

  return (
    <ScrollView style={styles.screen}>
      <View>
        <Text
          style={{
            fontSize: 16,
            marginTop: 6,
            fontWeight: '500',
            color: COLORS.black,
          }}>
          Edit your name
        </Text>
      </View>
      <View style={{marginTop: 40}}>
        <Text style={styles.label}>First Name</Text>
        <View
          style={[
            styles.parent,
            {
              borderWidth: 1,
              borderColor: isFNameFocused ? COLORS.secondary : 'transparent',
            },
          ]}>
          <TextInput
            style={[styles.textInput,{color:COLORS.black}]}
            onFocus={() => setIsFNameFocused(true)}
            onBlur={() => setIsFNameFocused(false)}
            value={FName}
            onChangeText={setFName}
          />
          {!!FName.trim().length && isFNameFocused && (
            <TouchableOpacity
              style={styles.closeButtonParent}
              onPress={() => setFName('')}>
              <Icon
                name={'close-outline'}
                size={20}
                style={{backgroundColor: COLORS.dividers, borderRadius: 50}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={styles.label}>Last Name</Text>
        <View
          style={[
            styles.parent,
            {
              borderWidth: 1,
              borderColor: isLNameFocused ? COLORS.secondary : 'transparent',
            },
          ]}>
          <TextInput
            style={[styles.textInput,{color:COLORS.black}]}
            onFocus={() => setIsLNameFocused(true)}
            onBlur={() => setIsLNameFocused(false)}
            value={LName}
            onChangeText={setLName}
          />
          {!!LName.trim().length && isLNameFocused && (
            <TouchableOpacity
              style={styles.closeButtonParent}
              onPress={() => setLName('')}>
              <Icon
                name={'close-outline'}
                size={20}
                style={{backgroundColor: COLORS.dividers, borderRadius: 50}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleSave}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 45,
        }}>
        <LinearGradient
          colors={[COLORS.secondary, COLORS.primary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[
            styles.btn,
            {
              width: 'auto',
              padding: 15,
              paddingHorizontal: 25,
              borderRadius: 7,
            },
          ]}>
          <Text
            style={{
              fontSize: 15,
              color: COLORS.white,
            }}>
            Save
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
  },
  label: {
    color: COLORS.black,
    fontWeight: '400',
  },
  parent: {
    paddingLeft: 15,
    marginTop: 6,
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightBorderColor,
  },
  textInput: {
    // height: 40,
    width: '90%',
    fontSize: 16,
  },
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});
