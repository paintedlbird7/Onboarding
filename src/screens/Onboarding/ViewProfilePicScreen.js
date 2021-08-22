// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   Button,
//   Platform,
// } from 'react-native';
// import { withSafeAreaInsets } from 'react-native-safe-area-context';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// // import ProfilePicScreen from '../onboard/src/screens/Onboarding/ProfilePicScreen';

       
// export default function ViewProfilePicScreen({ navigation }) {
//   let [selectedImage, setSelectedImage] = React.useState(null);

//   let openImagePickerAsync = async () => {
//     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert("Permission to access camera roll is required!");
//       return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     if (pickerResult.cancelled === true) {
//       return;
//     }



//     setSelectedImage({ localUri: pickerResult.uri });
//   };

//   if (selectedImage !== null) {
//     return (
//       <View style={styles.container}>
//         <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Add a profile photo</Text>

//       <Text style={styles.h2}>Add a photo so your friends know its you!</Text>
//       <Image source={require('../../../assets/images/camera.png')}></Image>

//       <View style={styles.spacer} />

//       <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
//         <Text style={styles.buttonText}>Choose from Library</Text>
//       </TouchableOpacity>
      
//       <View style={styles.spacer} />

//       <TouchableOpacity>
//           <Text
//               title='Next'
//               style={styles.text}
//               style={styles.button}
//               onPress={() => navigation.navigate('FreeFive')}
//             />
//       </TouchableOpacity>
//       </View>
//    );
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
//     container: {
//     fontFamily: 'SFPro',
//     position: 'absolute',
//     fontStyle: 'normal',
//     left: 31,
//     top: 65,
//   },


//   header: {
//     color: '#969DAC',
//     fontSize: 24,
//     fontWeight: '700',
//     lineHeight: 29,
//     letterSpacing: -0.05,
//     left: '5.5%',
//     right: '10.7%',
//     top: '10.29%',
//     bottom: '86.14%',
//     fontWeight: 'bold',
//   },

//   // instructions text
//   h2: {
//     left: '6%',
//     right: '6.38%',
//     top: '8.45%',
//     bottom: '81.83%',
//     fontWeight: 'normal',
//     fontSize: 12,
//     lineHeight: 20,
//     letterSpacing: -0.05,
//     marginTop: 20,
//     paddingBottom: 10,
//     color: '#969DAC',
//     fontSize: 12,
//     marginTop: 20,
//     paddingBottom: 10,
//     fontSize: 15,
//   },

//   logo: {
//     width: 305,
//     height: 159,
//     marginBottom: 20,
//   },
//   // instructions: {
//   //   color: '#888',
//   //   fontSize: 18,
//   //   marginHorizontal: 15,
//   //   marginBottom: 10,
//   // },
//     spacer: {
//     marginTop: 20, // moves button
//     marginBottom: 10,
//     height: 20,
//     width: 30,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff',
//   },
//   thumbnail: {
//     width: 300,
//     height: 300,
//     resizeMode: 'contain',
//   },
// });

// // const styles = StyleSheet.create({
// //   button: {
// //     backgroundColor: 'blue',
// //     borderColor: 'black',
// //     borderWidth: 0.5,
// //     borderRadius: 17,
// //     textAlign: 'center',
// //     color: 'white',
// //     fontWeight: '800',
// //     padding: 15,
// //     paddingBottom: 40,
// //   },
// // }),