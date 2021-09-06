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
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


/**
 * *********************************************************
 * Create Stack, BottomTab, and TopTab Navigators
 * *********************************************************
 * **/
const Stack = createStackNavigator();
// const SessionTab = createMaterialTopTabNavigator();



/**
 * *********************************************************
 * Individual stack navigators to inject into main App flow
 * *********************************************************
 * **/
const SessionTabNavigator = () => {
  return (
    <SessionTab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        style: { backgroundColor: '#1B1F2B' },
        indicatorStyle: { backgroundColor: '#756EFA' },
      }}>
      <SessionTab.Screen name='fri' component={DayOneScreen} />
      <SessionTab.Screen name='sat' component={DayTwoScreen} />
      <SessionTab.Screen name='sun' component={DayThreeScreen} />
      <SessionTab.Screen name='agenda' component={MySessionsScreen} />
    </SessionTab.Navigator>
  );
};


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
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='RegisterUsername'
        component={RegisterUsernameScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='Password'
        component={PasswordScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='ProfilePicScreen'
        component={ProfilePicScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='FreeFiveScreen'
        component={FreeFiveScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='Image'
        component={ImageScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='Sign in'
        component={SigninScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='Portfolio'
        component={PortfolioScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='Community'
        component={CommunityScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='Message'
        component={MessageScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='Referral'
        component={ReferralScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />

      <Stack.Screen
        name='Discovery'
        component={DiscoveryScreen}
        options={({ navigation }) => ({
          headerBackTitleVisible: false,
          headerBackImage: ({}) => (
            <Image source={require('../../assets/images/back.png')} />
          ),
        })}
      />
      
    </Stack.Navigator>
  );
}