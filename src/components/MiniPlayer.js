/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { useTrackPlayerProgress } from 'react-native-track-player';

import * as navigation from '../services/NavigationService';
import * as actions from '../redux/actions';
import Icon from './Icon';
import ProgressBar from './ProgressBar';
import color from '../utils/color';
import DefaultArtwork from '../../assets/images/default_artwork.svg';

const SCREEN_WIDTH = Dimensions.get('window').width;

const icons = {
  playIcon: {
    type: 'material',
    name: 'play-arrow',
    size: 42,
  },
  pauseIcon: {
    type: 'material',
    name: 'pause',
    size: 42,
  },
  forwardIcon: {
    type: 'material',
    name: 'fast-forward',
    size: 42,
  },
};

const MiniPlayer = (props) => {
  const { isPlaying, media, currentTrack } = props;
  const { position, duration } = useTrackPlayerProgress(100);

  const tooglePlayback = () => {
    props.setPlayback(!isPlaying);
  };

  const skipForward = () => {
    const nextTrack =
      currentTrack.index === media.length - 1 ? media[0] : media[currentTrack.index + 1];
    props.setCurrentTrack(nextTrack);
  };

  let progress = position / duration;
  progress = isNaN(progress) ? 0 : +progress.toFixed(3);

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.artworkContainer}>
          {currentTrack.artwork ? (
            <Image style={styles.cover} source={currentTrack.artwork} />
          ) : (
            <DefaultArtwork width={50} height={50} />
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{currentTrack.title}</Text>
        </View>
        <View style={styles.controlsContainer}>
          {isPlaying ? (
            <Icon {...icons.pauseIcon} onPress={tooglePlayback} />
          ) : (
            <Icon {...icons.playIcon} onPress={tooglePlayback} />
          )}
          <Icon {...icons.forwardIcon} onPress={skipForward} />
        </View>
        <View style={styles.progressContainer}>
          <ProgressBar style={styles.progressbar} progress={progress} color="#1ED760" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state) => {
  return {
    media: state.media.mediaFiles,
    currentTrack: state.media.currentTrack,
    isPlaying: state.media.isPlaying,
  };
};

export default connect(mapStateToProps, actions)(MiniPlayer);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    borderTopColor: '#E9E9E9',
    borderTopWidth: 1,
    backgroundColor: '#F9F9F9',
  },
  artworkContainer: {
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  infoContainer: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 192,
  },
  title: {
    fontSize: 14,
    color: '#646464',
  },
  subtitle: {},
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 16,
  },
  progressContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  progressbar: {
    height: 2,
    width: SCREEN_WIDTH,
    backgroundColor: color.gray[4],
  },
});
