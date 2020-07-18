/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';
import Icon from './Icon';

const PlaybackControls = (props) => {
  const { media, currentTrack, isPlaying } = props;

  function skipForward() {
    const nextTrack =
      currentTrack.index === media.length - 1 ? media[0] : media[currentTrack.index + 1];
    props.setCurrentTrack(nextTrack);
  }

  function skipBackward() {
    const nextTrack =
      currentTrack.index === 0 ? media[media.length - 1] : media[currentTrack.index - 1];
    props.setCurrentTrack(nextTrack);
  }

  return (
    <View style={styles.container}>
      <Icon style={styles.icon} {...icons.skipBackward} onPress={skipBackward} />
      {isPlaying ? (
        <Icon style={styles.icon} {...icons.pause} onPress={() => props.setPlayback(!isPlaying)} />
      ) : (
        <Icon style={styles.icon} {...icons.play} onPress={() => props.setPlayback(!isPlaying)} />
      )}
      <Icon style={styles.icon} {...icons.skipForward} onPress={skipForward} />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    media: state.media.mediaFiles,
    currentTrack: state.media.currentTrack,
    isPlaying: state.media.isPlaying,
  };
}

export default connect(mapStateToProps, actions)(PlaybackControls);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 54,
    marginTop: 32,
  },
  icon: {
    marginHorizontal: 8,
  },
});

const icons = {
  play: {
    type: 'material',
    name: 'play-arrow',
    size: 42,
  },
  pause: {
    type: 'material',
    name: 'pause',
    size: 42,
  },
  skipForward: {
    type: 'material',
    name: 'fast-forward',
    size: 42,
  },
  skipBackward: {
    type: 'material',
    name: 'fast-rewind',
    size: 42,
  },
};
