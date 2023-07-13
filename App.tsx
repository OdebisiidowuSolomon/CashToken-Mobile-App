import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/OnBoardingScreen.js';
import {FirstScreenNavigator} from './CustomNavigator.js';
import NestedScreen from './src/screens/NestedScreen.js';
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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen
          name="FirstScreenNavigator"
          component={FirstScreenNavigator}
        />
        <Stack.Screen name="Nested" component={NestedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
