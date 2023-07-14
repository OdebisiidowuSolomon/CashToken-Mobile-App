/* eslint-disable prettier/prettier */
// Contacts.js

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import SelectableCard from '../../components/SelectableCard';
import ContactSearchInput from '../../components/ContactSearchInput';
import axios from 'axios';
import Spinner from '../../components/Spinner';

const BankList = ({navigation, route}) => {
  const {navigate} = navigation;

  const [banks, setBanks] = useState(null);
  const [bankx, setBankx] = useState(null);
  const [alphaSets, setAlphaSets] = useState(null);
  const [search, setSearch] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    getData();
    // axios
    //   .get()
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    getAlphaSets();
  }, [getAlphaSets, banks]);

  const getAlphaSets = useCallback(() => {
    console.log('Called 1');
    if (banks) {
      console.log('Called 2');
      const alphaSet = new Set();

      banks.forEach(({name}) => {
        // console.log(name);
        if (!/[^a-zA-Z]/.test(name?.split('')[0]) && name?.split('')[0]) {
          alphaSet.add(name?.split('')[0].toUpperCase());
        }
      });

      setAlphaSets([...alphaSet]);

      // console.log(alphaSets);
    }
  }, [banks]);

  const getData = async () => {
    try {
      const result = await axios.get(
        'https://api.flutterwave.com/v3/banks/ng',
        {
          headers: {
            Authorization: 'Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X',
          },
        },
      );
      const data = result.data.data.slice(0, 100);
      setBanks(data.sort((a, b) => a?.name?.localeCompare(b.name)));
      setBankx(data.sort((a, b) => a?.name?.localeCompare(b.name)));
    } catch (e) {
      // error reading value
    }
  };

  const handleTextChange = text => {
    setSearch(text);
    setAlphaSets(null);

    const data = banks
      ?.slice()
      .filter(item => item?.name?.toLowerCase().includes(text.toLowerCase()));
    setBankx(data);
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
          <HeaderText text={'Available Banks'} />
        </View>
      )}

      <View>
        {!banks ? (
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
                  }}>
                  {item}
                </Text>
                <View style={{paddingHorizontal: 18, marginBottom: 15}}>
                  {bankx &&
                    bankx
                      .filter(({name}) => name?.startsWith(item))
                      .map(({name}, __) => {
                        return (
                          <SelectableCard
                            key={__}
                            image={require('../../images/Recipient_icon.png')}
                            showLeftIcon={false}
                            title={name}
                            onPress={() =>
                              navigate('WithdrawRewardBank', {msg: {name}})
                            }
                            imageStyle={{
                              borderRadius: 50,
                              backgroundColor: COLORS.lightBorderColor,
                            }}
                          />
                        );
                      })}
                </View>
              </View>
            );
          })
        ) : (
          bankx?.map(({name, code}, _) => {
            return (
              <SelectableCard
                key={_}
                image={require('../../images/Recipient_icon.png')}
                showLeftIcon={false}
                title={name}
                subtitle={code}
                onPress={() => navigate('WithdrawRewardBank', {msg: {name}})}
                imageStyle={{
                  borderRadius: 50,
                  backgroundColor: COLORS.lightBorderColor,
                }}
              />
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

export default BankList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
