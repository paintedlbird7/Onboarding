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

function RegisterScreen({ navigation }) {
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
      <Text style={styles.header}>What is your name?</Text>
      <Text style={styles.h2}>This will be what shows on your profile.</Text>

      <View style={styles.form}>
        <TextInput
          style={{ color: 'black' }}
          value={value.text}
          placeholder='Enter name'
          onChangeText={text => onChangeText(text)}
        />
        <View style={styles.spacer} />

        <TouchableOpacity
          disabled={disabled}
          style={{ backgroundColor: disabled ? 'silver' : 'black' }}>
          <Text
            onPress={() => navigation.navigate('RegisterUsername')}
            style={{ color: 'white', textAlign: 'center' }}
            style={styles.button}
            title='button'>
            Next
          </Text>
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
    left: '6.38%',
    right: '6.38%',
    top: '13%',
    bottom: '71.46%',
    borderColor: 'black',
    opacity: 0.2,
    borderRadius: 10,
    height: 45,
    width: 300,
    marginTop: 20,
    paddingBottom: 10,
    backgroundColor: '#D7DCE4',
    borderWidth: 0.2,
  },

  spacer: {
    marginTop: 20, // moves button
    marginBottom: 100,
    height: 2,
    width: 30,
  },

  button: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 17,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    padding: 15,
    paddingBottom: 40,
  },
});

export default RegisterScreen;
