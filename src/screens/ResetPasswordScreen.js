import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Button,
} from 'react-native';
// import Button from '../components/ui/Button.js';
// import {IconButton} from '../components/ui/IconButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ResetPasswordScreen({ navigation }) {
//  HomeScreen({ navigation }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState('false');

  return (
    <View style={styles.container}>
      {/* modal opens once click on Reset Button */}
      <Modal visible={modalOpen} animationType='slide'>
        <View styles={StyleSheet.modalContent}>
          <MaterialCommunityIcons
            name='close-circle-outline'
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />

          <Text>Reset Password confirmed, please check your email for link to reset your password</Text>
        </View>
      </Modal>

  

      <View style={styles.section}>
        <Text style={styles.sectionText}>Forgot Password</Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.paragraphText}>
          User to reset password. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas pellentesque neque at leo eleifend blandit.{' '}
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.spacer} />

      <View style={{ marginBottom: 20 }}>
        {/* To do, place it ontop the Reset Button */}
            {/* TODO: place it ontop the Reset Button */}
   
        <TouchableOpacity>
             <MaterialCommunityIcons
        name='keyboard-return'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      
          <Button title='Reset' onPress={() => navigation.navigate('ResetPassword',  console.log("ResetPassword Button Pressed"))} />

          {/* onPress={() => Reset({ email, password })} */}
        </TouchableOpacity>
      </View>

      <Text>Need help? Email us at organizer@mail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    paddingTop: 20,
    textAlign: 'left',
  },
  sectionText: {
    fontWeight: 'normal',
    fontSize: 10,
  },
  paragraph: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  paragraphText: {
    fontSize: 20,
  },
  input: {
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: null,
    borderColor: '#C5C2C2',
    borderWidth: 1,
    height: 35,
    width: 250,
    textAlign: 'center',
  },
  spacer: {
    marginTop: 20,
    marginBottom: 35,
    height: 2,
    width: 30,
    backgroundColor: '#BBB',
  },
  button: {
    width: 250,
    backgroundColor: '#5F5E5E',
    borderRadius: 20,
  },
  buttonText: {
    paddingHorizontal: 10,
    lineHeight: 40,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});