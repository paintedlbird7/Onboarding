import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
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
import SigninScreen from '../screens/SigninScreen';
import RegisterScreen from '../screens/Onboarding/RegisterScreen';
import RegisterUsernameScreen from '../screens/Onboarding/RegisterUsernameScreen';
import PasswordScreen from '../screens/Onboarding/PasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import CommunityScreen from '../screens/CommunityScreen';
import MessageScreen from '../screens/MessageScreen';
import ReferralScreen from '../screens/ReferralScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import { Ionicons } from '@expo/vector-icons';
import ProfilePicScreen from '../screens/Onboarding/ProfilePicScreen';
import ViewProfilePicScreen from '../screens/Onboarding/ViewProfilePicScreen';
import FreeFiveScreen from '../screens/Onboarding/FreeFiveScreen';

const Stack = createStackNavigator();

export default function AppNavigation({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image
              source={require('../../assets/images/back.png')}
            />
          ),
        })}
      />

      <Stack.Screen
        name='RegisterUsername'
        component={RegisterUsernameScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image
              source={require('../../assets/images/back.png')}
            />
          ),
        })}
      />

      <Stack.Screen
        name='Password'
        component={PasswordScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image
              source={require('../../assets/images/back.png')}
            />
          ),
        })}
      />

      <Stack.Screen
        name='ProfilePicScreen'
        component={ProfilePicScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image
              source={require('../../assets/images/back.png')}
            />
          ),
        })}
      />

      <Stack.Screen
        name='FreeFiveScreen'
        component={FreeFiveScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image
              source={require('../../assets/images/back.png')}
            />
          ),
        })}
      />


<Stack.Screen
        name='Image'
        component={ImageScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image
              source={require('../../assets/images/back.png')}
            />
          ),
        })}
      />
 
 {/* ToDo: make stacks for navigation, right now it console.log when pressed */}

    </Stack.Navigator>
  );
}
