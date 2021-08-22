import React from 'react';
import {View, Text, StyleSheet, Image, } from 'react-native';

const ImageDetail = ({ imageSource, title, }) => {
    return (
    <View>
        <Image source={imageSource}/>
        <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
})

export default ImageDetail;