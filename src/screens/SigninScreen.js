import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function SigninScreen({ navigation }) {
  const [disabled, setDisable] = useState(true);
  const [value, setValue] = useState('');

  function onChangeText(text) {
    if (text.length == 0) {
      setDisable({ disabled: true });
    } else {
      setDisable(false);
    }
    setValue({ value: text });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Text style={styles.h2}>Please sign in</Text>

      <View style={styles.form}>
        <TextInput
          style={{ color: 'black',    left: '6.38%',
          right: '6.38%',
          top: '13%',
          bottom: '71.46%',
          opacity: 0.2,
          borderRadius: 10,
          height: 45,
          width: 300,
          marginTop: 20,
          paddingBottom: 10,
          borderColor: 'black',
         backgroundColor: 'silver',

          // borderWidth: 3,
          // backgroundColor: 'red',
            borderWidth: 1,
          borderColor: "red", }}
          value={value.text}
          placeholder='Username'
          onChangeText={text => onChangeText(text)}
        />

        <View style={styles.spacer2} />

        <TextInput
          style={{ color: 'black',    left: '6.38%',
    right: '6.38%',
    top: '13%',
    bottom: '71.46%',
    opacity: 0.2,
    borderRadius: 10,
    height: 45,
    width: 300,
    marginTop: 20,
    paddingBottom: 10,
    borderColor: 'black',
    // borderWidth: 3,
    // backgroundColor: 'red',
      borderWidth: 1,
    borderColor: "red", 
    backgroundColor: 'silver',
  }}
          value={value.text}
          placeholder='Password'
          onChangeText={text => onChangeText(text)}
        />
        <View style={styles.spacer} />

        <TouchableOpacity
          disabled={disabled}
          style={{ backgroundColor: disabled ? 'silver' : 'grey' }}>
          {/* <Text
            onPress={() => navigation.navigate('Discovery')}
            style={{ color: 'white', textAlign: 'center' }}
            style={styles.button}
            title='button'>
            Next
          </Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'SFPro',
    position: 'absolute',
    fontStyle: 'normal',
    left: 31,
    top: 65,
    // borderColor: 'black',
    // borderWidth: 1,
  },

  header: {
    color: '#969DAC',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 29,
    letterSpacing: -0.05,
    left: '5.5%',
    right: '10.7%',
    top: '10.29%',
    bottom: '86.14%',
    fontWeight: 'bold',
  },

  h2: {
    left: '6%',
    right: '6.38%',
    top: '8.45%',
    bottom: '81.83%',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: -0.05,
    marginTop: 20,
    paddingBottom: 10,
    color: '#969DAC',
    fontSize: 12,
    marginTop: 20,
    paddingBottom: 10,
    fontSize: 15,
  },

  form: {
    // left: '6.38%',
    // right: '6.38%',
    // top: '13%',
    // bottom: '71.46%',
    // opacity: 0.2,
    // borderRadius: 10,
    // height: 45,
    // width: 300,
    // marginTop: 20,
    // paddingBottom: 10,
    // borderColor: 'black',
    // // borderWidth: 3,
    // // backgroundColor: 'red',
    //   borderWidth: 1,
    // borderColor: "red",

  },

  spacer: {
    marginTop: 20, // moves button
    marginBottom: 100,
    height: 2,
    width: 30,
  },

  // spacer2: {
  //   borderColor: 'blue',
  //   borderWidth: 1,
  //   // borderColor: 'white',
  //   // borderWidth: 10,
  //   // marginTop: 10, // moves button
  //   marginBottom: 50,
  //   height: 10,
  //   // width: 300,
  //   // backgroundColor: 'red',
  // },

  button: {
    // borderColor: 'red',
    borderWidth: 2,
    borderRadius: 17,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    padding: 15,
    paddingBottom: 40,
  },
});
