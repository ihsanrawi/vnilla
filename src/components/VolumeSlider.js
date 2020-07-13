import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDER_WIDTH = SCREEN_WIDTH * 0.82;

const VolumeSlider = () => {
  return (
    <View style={styles.container}>
      <Slider style={{ width: SLIDER_WIDTH }} />
    </View>
  );
};

export default VolumeSlider;

const styles = StyleSheet.create({
  container: { flexDirection: 'column', alignItems: 'center', marginTop: 32 },
});
