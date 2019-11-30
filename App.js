import React from 'react';
import { StyleSheet } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ServiceScreen from './src/screens/ServiceScreen';
import AnimatedScreen from './src/screens/AnimateScreen';
import MapScreen from './src/screens/MapScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Animated: {screen: AnimatedScreen},
  Profile: {screen: ProfileScreen},
  Service: {screen: ServiceScreen},
  Map: {screen: MapScreen}
  
});

const App = createAppContainer(MainNavigator);

export default App;

