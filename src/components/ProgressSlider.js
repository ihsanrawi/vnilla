import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default () => {
  const msToSec = (ms) => {
    return parseInt(ms / 1000, 10);
  };

  const secToTime = (secs) => {
    if (secs < 0) {
      return '0.00';
    }

    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);

    return seconds <= 9 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  };

  const timePassed = (duration) => {
    return secToTime();
  };

  return (
    <View style={styles.container}>
      <Slider />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{timePassed}</Text>
        <Text style={styles.time}>'duration'</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  timeContainer: {},
  time: {},
});
