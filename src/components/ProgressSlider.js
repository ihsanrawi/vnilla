/* eslint-disable class-methods-use-this */
import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';

import color from '../utils/color';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDER_WIDTH = SCREEN_WIDTH * 0.82;

class ProgressSlider extends ProgressComponent {
  msToSec(ms) {
    return parseInt(ms / 1000, 10);
  }

  secToTime(sec) {
    if (sec < 0) {
      return '0:00';
    }

    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);

    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  timePassed(duration) {
    return this.secToTime(this.getProgress() * this.msToSec(duration));
  }

  secToTimeDuration(duration) {
    const timeInSeconds = this.msToSec(duration);
    return this.secToTime(timeInSeconds);
  }

  seekTo = (value) => {
    const seekPosition = value * this.msToSec(this.props.currentTrack.duration);
    TrackPlayer.seekTo(seekPosition);
  };

  render() {
    const { currentTrack } = this.props;

    return (
      <View style={styles.container}>
        <Slider
          value={this.getProgress()}
          style={styles.sliderStyle}
          minimumTrackTintColor={color.green[7]}
          maximumTrackTintColor={color.gray[6]}
          thumbStyle={styles.thumbStyle}
          thumbSize={styles.thumbSize}
          onValueChange={this.seekTo}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}> {this.timePassed(currentTrack.duration)} </Text>
          <Text style={styles.time}> {this.secToTimeDuration(currentTrack.duration)} </Text>
        </View>
      </View>
    );
  }
}

export default ProgressSlider;

const styles = StyleSheet.create({
  container: { flexDirection: 'column', alignItems: 'center', marginTop: 42 },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SLIDER_WIDTH,
  },
  time: {
    fontSize: 12,
    color: `${color.gray[6]}`,
  },
  sliderStyle: {
    width: SLIDER_WIDTH,
  },
  barStyle: { height: 3 },
  thumbStyle: { height: 0, width: 0 },
  thumbSize: { width: SCREEN_WIDTH * 1.5, height: 40 },
});
