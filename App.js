import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  View,
  Text,
} from 'react-native';
import AppNavigation from '../Onboarding/src/navigation/AppNavigation';

function App({ navigation }) {
  return (
    <NavigationContainer>
      <AppNavigation></AppNavigation>
    </NavigationContainer>
  );
}
export default App;
