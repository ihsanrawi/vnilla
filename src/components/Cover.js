import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

const placeholder = require('../../assets/images/placeholder.jpg');

const IMAGE_SIZE = Dimensions.get('window').width * 0.82;

const Cover = (props) => {
  //   const imgSrc = props.src ? { uri: props.src } : placeholder;
  const imgSrc = placeholder;

  return <Image style={styles.cover} source={imgSrc} />;
};

export default Cover;

const styles = StyleSheet.create({
  cover: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: 5,
  },
});
