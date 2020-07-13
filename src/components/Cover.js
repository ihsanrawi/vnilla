import React from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';

const placeholder = require('../../assets/images/placeholder.jpg');

const IMAGE_SIZE = Dimensions.get('window').width * 0.72;

const Cover = (props) => {
  //   const imgSrc = props.src ? { uri: props.src } : placeholder;
  const imgSrc = placeholder;

  return (
    <View style={styles.coverContainer}>
      <Image style={styles.cover} source={imgSrc} />
    </View>
  );
};

export default Cover;

const styles = StyleSheet.create({
  coverContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  cover: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: 10,
  },
});
