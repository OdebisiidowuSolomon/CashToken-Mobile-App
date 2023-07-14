/* eslint-disable prettier/prettier */
import {View, ActivityIndicator, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

const Spinner = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* //size can be "small" or "large" */}
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

export default Spinner;
