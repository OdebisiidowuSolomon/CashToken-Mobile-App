/* eslint-disable prettier/prettier */
// Contacts.js

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import SelectableCard from '../../components/SelectableCard';
import ContactSearchInput from '../../components/ContactSearchInput';
import Spinner from '../../components/Spinner';

const Contacts = ({navigation: {navigate}, route}) => {
  const [contacts, setContacts] = useState(null);
  const [contactx, setContactx] = useState(null);
  const [alphaSets, setAlphaSets] = useState(null);
  const [search, setSearch] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getAlphaSets();
  }, [getAlphaSets, contacts]);

  const getAlphaSets = useCallback(() => {
    console.log('Called 1');
    if (contacts) {
      console.log('Called 2');
      const alphaSet = new Set();

      contacts.forEach(({name}) => {
        // console.log(name);
        if (!/[^a-zA-Z]/.test(name?.split('')[0]) && name?.split('')[0]) {
          alphaSet.add(name?.split('')[0].toUpperCase());
        }
      });

      setAlphaSets([...alphaSet]);

      // console.log(alphaSets);
    }
  }, [contacts]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      const result = JSON.parse(jsonValue);
      const data = result.slice(0, 100).map(item => ({
        name: item.displayName,
        phoneNumber: item.phoneNumbers[0]?.number,
      }));
      setContacts(data.sort((a, b) => a?.name?.localeCompare(b.name)));
      setContactx(data.sort((a, b) => a?.name?.localeCompare(b.name)));
    } catch (e) {
      // error reading value
    }
  };

  const handleTextChange = text => {
    setSearch(text);
    setAlphaSets(null);

    const data = contacts
      ?.slice()
      .filter(item => item?.name?.toLowerCase().includes(text.toLowerCase()));
    setContactx(data);
  };

  return (
    <ScrollView style={styles.screen}>
      <ContactSearchInput
        ref={inputRef}
        search={search}
        handleTextChange={handleTextChange}
        placeholder={'Enter name or phone number'}
      />

      {!search.trim() && (
        <View style={{marginHorizontal: 18}}>
          <HeaderText text={'All Contacts'} />
        </View>
      )}

      <View>
        {!contacts ? (
          <Spinner />
        ) : alphaSets ? (
          alphaSets.map((item, _) => {
            return (
              <View key={_}>
                <Text
                  style={{
                    backgroundColor: COLORS.lightBorderColor,
                    paddingVertical: 7,
                    paddingHorizontal: 18,
                    color: COLORS.text,
                  }}>
                  {item}
                </Text>
                <View style={{paddingHorizontal: 18, marginBottom: 15}}>
                  {contactx &&
                    contactx
                      .filter(
                        ({name, phoneNumber}) =>
                          name?.startsWith(item) && phoneNumber,
                      )
                      .map(({name, phoneNumber, phoneNumber2}, _) => {
                        return (
                          <SelectableCard
                            key={_}
                            image={require('../../images/Recipient_icon.png')}
                            showLeftIcon={false}
                            title={name}
                            subtitle={phoneNumber}
                            onPress={() => {}}
                            imageStyle={{
                              borderRadius: 50,
                              backgroundColor: COLORS.lightBorderColor,
                            }}
                            leftIcon={
                              <TouchableOpacity
                                style={{
                                  marginLeft: 'auto',
                                  padding: 5,
                                  paddingHorizontal: 13,
                                  borderRadius: 10,
                                  borderWidth: 1,
                                  borderColor: COLORS.secondary,
                                }}
                                onPress={() => navigate('Quantity')}>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    color: COLORS.secondary,
                                  }}>
                                  Gift
                                </Text>
                              </TouchableOpacity>
                            }
                          />
                        );
                      })}
                </View>
              </View>
            );
          })
        ) : (
          contactx?.map(({name, phoneNumber, phoneNumber2}, _) => {
            return (
              <SelectableCard
                key={_}
                image={require('../../images/Recipient_icon.png')}
                showLeftIcon={false}
                title={name}
                subtitle={phoneNumber}
                onPress={() => {}}
                imageStyle={{
                  borderRadius: 50,
                  backgroundColor: COLORS.lightBorderColor,
                }}
                leftIcon={
                  <TouchableOpacity
                    style={{
                      marginLeft: 'auto',
                      padding: 5,
                      paddingHorizontal: 13,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: COLORS.secondary,
                    }}
                    onPress={() => navigate('Quantity')}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: COLORS.secondary,
                      }}>
                      Gift
                    </Text>
                  </TouchableOpacity>
                }
              />
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
  },
});
