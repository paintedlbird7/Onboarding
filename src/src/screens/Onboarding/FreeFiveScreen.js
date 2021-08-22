import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'PTON',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'SNAP',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'TLSA',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-4ad53abb28ba',
    title: 'PTON',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fb391aa97f63',
    title: 'SNAP',
  },
  {
    id: '58694a0f-3da1-471f-bd96-185571e29d72',
    title: 'TLSA',
  },
  {
    id: 'bd72cbea-c1b1-46c2-aed5-4ad53abb28ba',
    title: 'PTON',
  },
  {
    id: '3ac68efc-c605-48d3-a4f8-fb391aa97f63',
    title: 'SNAP',
  },
  {
    id: '5869e4a0f-3da1-471f-bd96-185571e29d72',
    title: 'TLSA',
  },
  {
    id: 'bd72cbea-c1b1-46c2-a4d5-4ad53abb28ba',
    title: 'PTON',
  },
  {
    id: '3ac68efc-c605-48d3-a4f3-fb391aa97f63',
    title: 'SNAP',
  },
  {
    id: '586ee4a0f-3da1-471f-bd96-185571e29d72',
    title: 'TLSA',
  },
  {
    id: 'bd72cbea-c1b1-46c2-a4d5-4a453abb28ba',
    title: 'PTON',
  },
  {
    id: '3ac68efc-c605-48d3-a4f3-f4391aa97f63',
    title: 'SNAP',
  },
  {
    id: '586ee4a0f-3da1-471f-bd96-185573e29d72',
    title: 'TLSA',
  },
];

const FreeFiveScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const numColumns = 3;

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#D7DCE4' : 'D7DCE4'; //F7F8FA
    const color = item.id === selectedId ? '#969DAC' : 'D7DCE4';

    return (
      <Item
        style={{ aspectRatio: 1, height: 100, flex: 1 / numColumns }}
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recieve $5 of any stock</Text>
      <Text style={styles.h2}>
        When trading goes live on our platform you will recieve free stock from
        the company you select after you create your broker account.
      </Text>

      <View style={styles.spacer} />

      <TouchableOpacity>
        <Text
          onPress={() =>
            alert('Next button pressed')
            //  navigation.navigate('') ToDo: import contacts
          }
          style={{ color: 'white', textAlign: 'center' }}
          style={styles.button}
          title='button'>
          Next
        </Text>
      </TouchableOpacity>

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <FlatList
            renderItem={renderItem}
            numColumns={4}
            style={styles.list}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={numColumns}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

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

  list: {
    borderColor: 'black',
    // alignSelf: 'flex-start',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // numColumns={listData.length / 2},
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
  spacer: {
    marginTop: 20, // moves button
    marginBottom: 100,
    height: 2,
    width: 30,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default FreeFiveScreen;
