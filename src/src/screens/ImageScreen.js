import React from 'react';
import {View, Text, StyleSheet, Image, } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetail title="Mountain" imageSource={require('../../assets/images/mountain.jpg')}/>
        <ImageDetail title="Forest" imageSource={require('../../assets/images/forest.jpg')} />
        <ImageDetail title="Beach" imageSource={require('../../assets/images/beach.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
})

export default ImageScreen;