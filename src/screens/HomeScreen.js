import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import * as font from 'expo-font';
// import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


// testing out 2 different fonts
export default function HomeScreen({ navigation }) {
  const [loaded] = useFonts({
        'FontsFree-Net-SFProDisplay-Regular': require('../../assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf'),
         'SFPro': require('../../assets/fonts/SFPro.ttf'),
         'Montserrat': require('../../assets/fonts/Montserrat.ttf'),
  });

  if (!loaded) {
    return null;
  }
    return (
      <View style={styles.container}>
                <Text style={{ fontFamily: 'Montserrat', fontSize: 30 }}>Montserrat! WSFPro font</Text>
        <Text style={{ fontFamily: 'FontsFree-Net-SFProDisplay-Regular', fontSize: 30 }}>Welcome!</Text>
        <Text style={{ fontFamily: 'SFPro', fontSize: 30 }}>WSFPro font !</Text>

        <StatusBar style='auto' />
        <Button
          title='Create account'
          onPress={() => navigation.navigate('Register')}
        />

        <Button
        //   style={styles.signin}
          title='Sign in'
          onPress={() => navigation.navigate('Sign in',  console.log("Sign in Button Pressed"))}
        />

      <Button
        //   style={styles.signin}
          title='ResetPassword'
          onPress={() => navigation.navigate('ResetPassword',  console.log("ResetPassword Button Pressed"))}
        />

        <Button
          title='Image'
          onPress={() => navigation.navigate('Image',  console.log("Image Button Pressed"))}
        />   


      <Button
          title='Settings'
          onPress={() => navigation.navigate('Settings',  console.log("Settings Button Pressed"))}
        /> 

      {/* <Button
          title='Discovery'
          onPress={() => navigation.navigate('Discovery',  console.log("Discovery Button Pressed"))}
        />  */}
      </View>

      
    );
  }

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      // justifyContent: 'space-between',
      // alignItems: 'flex-start',
      // marginTop: 40,
      // paddingLeft: 30, 
    },
    // font: {
    //   fontFamily: 'FontsFree-Net-SFProDisplay-Regular',

    // }
})