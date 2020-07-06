/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
// import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks';

import * as actions from '../redux/actions';
import Icon from './Icon';
import { light } from '../utils/themes/light';
import ProgressBar from './ProgressBar';

const placeholder = require('../../assets/images/placeholder.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;

const icons = {
  playIcon: {
    type: 'material',
    name: 'play-arrow',
    size: 24,
    color: `${light.contrast}`,
  },
  pauseIcon: {
    type: 'material',
    name: 'pause',
    size: 24,
    color: `${light.contrast}`,
  },
  forwardIcon: {
    type: 'material',
    name: 'fast-forward',
    size: 24,
    color: `${light.contrast}`,
  },
};

const MiniPlayer = (props) => {
  const { isPlaying, renderMiniPlayer, currentTrack } = props;
  // const { position, duration } = useTrackPlayerProgress(100);
  const tooglePlayback = () => {
    props.setPlayback(!isPlaying);
  };

  // const progress = position / duration;
  const progress = 5;
  // const coverSrc = currentTrack.artwork ? currentTrack.artwork : placeholder;
  const coverSrc = placeholder;

  return renderMiniPlayer && currentTrack.id !== '001' ? (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image style={styles.cover} source={coverSrc} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{currentTrack.title}</Text>
        </View>
        <View style={styles.controlsContainer}>
          {isPlaying ? (
            <Icon {...icons.pauseIcon} onPress={tooglePlayback} />
          ) : (
            <Icon {...icons.playIcon} onPress={tooglePlayback} />
          )}
          <Icon {...icons.forwardIcon} onPress={tooglePlayback} />
        </View>
        <View style={styles.progressContainer}>
          {/* <ProgressBar style={styles.progressbar} progress /> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    renderMiniPlayer: state.footer.footerVisible,
    currentTrack: state.playback.currentTrack,
    isPlaying: state.player.isPlaying,
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
    backgroundColor: 'pink',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
  },
  cover: {
    height: 42,
    width: 42,
    borderRadius: 8,
  },
  infoContainer: {
    height: '75%',
    flex: 2,
    justifyContent: 'center',
    marginLeft: 15,
  },
  title: {
    fontSize: 14,
    color: `${light.contrast}`,
  },
  subtitle: {},
  controlsContainer: {
    height: '75%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  progressContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  progressbar: {
    height: 2,
    width: `${SCREEN_WIDTH}`,
    backgroundColor: `${light.contrast}`,
  },
});
