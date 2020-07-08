/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';
import Icon from './Icon';

const CONTAINER_WIDTH = Dimensions.get('window').width * 0.82 + 10;

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
    <View style={(styles.container, { width: CONTAINER_WIDTH })}>
      <Icon style={styles.icon} {...icons.skipBackward} onPress={skipBackward} />
      <TouchableWithoutFeedback onPress={() => props.setPlayback(!isPlaying)}>
        {isPlaying ? (
          <Icon style={styles.icon} {...icons.pause} />
        ) : (
          <Icon style={styles.icon} {...icons.play} />
        )}
      </TouchableWithoutFeedback>
      <Icon style={styles.icon} {...icons.skipForward} onPress={skipForward} />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    media: state.media.mediaFiles,
    currentTrack: state.playback.currentTrack,
    isPlaying: state.player.isPlaying,
  };
}

export default connect(mapStateToProps, actions)(PlaybackControls);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    padding: 5,
  },
});

const icons = {
  play: {
    type: 'material',
    name: 'play-arrow',
    size: 20,
  },
  pause: {
    type: 'material',
    name: 'pause',
    size: 20,
  },
  skipForward: {
    type: 'material',
    name: 'fast-forward',
    size: 20,
  },
  skipBackward: {
    type: 'material',
    name: 'fast-rewind',
    size: 20,
  },
};
