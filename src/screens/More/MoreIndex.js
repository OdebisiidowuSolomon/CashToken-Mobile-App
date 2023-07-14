/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// NestedScreen.js

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../libs/Constants';
import HeaderText from '../../components/HeaderText';
import SelectableCard from '../../components/SelectableCard';

const MoreIndex = ({navigation: {navigate}, route}) => {
  return (
    <View style={styles.screen}>
      <HeaderText
        text={'More'}
        customStyle={{fontSize: 16, marginTop: 44, textAlign: 'center'}}
      />
      <SelectableCard
        image={require('../../images/support_agent.png')}
        title={'Support'}
        onPress={() => navigate('SupportCenter')}
        />
      <SelectableCard image={require('../../images/quiz.png')} title={'FAQs'} />
      <SelectableCard
        image={require('../../images/policy.png')}
        title={'Terms and Conditions'}
      />
      <SelectableCard
        image={require('../../images/local_convenience_store.png')}
        title={'Find Businesses'}
      />
      <SelectableCard
        image={require('../../images/local_convenience_store.png')}
        title={'Transactions History'}
      />
      <SelectableCard
        image={require('../../images/CashToken-Logo-2.png')}
        title={'About CashToken'}
      />
      <SelectableCard
        image={require('../../images/group.png')}
        title={'Refer a Friend'}
      />
      <SelectableCard
        image={require('../../images/Vector.png')}
        title={'Settings'}
        onPress={() => navigate('Settings')}
      />
    </View>
  );
};

export default MoreIndex;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.lightBorderColor,
    paddingHorizontal: 18,
  },
});

// const MoreOption = () => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         backgroundColor: COLORS.white,
//         alignItems: 'center',
//         marginTop: 15,
//         padding: 10,
//         borderRadius: 10,
//       }}>
//       <View style={{flexDirection: 'row'}}>
//         <View
//           style={{
//             padding: 10,
//             marginRight: 10,
//             backgroundColor: COLORS.gold,
//           }}>
//           <Image
//             source={require('../../images/account_balance.png')}
//             style={{objectFit: 'contain'}}
//           />
//         </View>
//         <View style={{justifyContent: 'center'}}>
//           <Text style={{fontSize: 14, color: COLORS.black}}>
//             Pay with Transfer
//           </Text>
//         </View>
//       </View>
//       <View>
//         <Icon >
//       </View>
//     </View>
//   );
// };
