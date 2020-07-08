/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import PlaybackControls from '../components/PlaybackControls';
import Cover from '../components/Cover';
import Icon from '../components/Icon';

const PLAYER_WIDTH = Dimensions.get('window').width * 0.82;

const PlayerScreen = (props) => {
  const { currentTrack, showMiniplayer } = props;

  const subtitle = `${currentTrack.artist}`;

  return (
    <View style={styles.wrapper}>
      <View style={styles.chevronContainer}>
        <Icon style={styles.icon} {...icons.chevron} />
      </View>
      <View style={styles.container}>
        <Cover src={currentTrack.artwork} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{currentTrack.title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <PlaybackControls />
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    currentTrack: state.playback.currentTrack,
    showMiniplayer: state.footer.footerVisible,
  };
}

export default connect(mapStateToProps, actions)(PlayerScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  chevronContainer: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    width: PLAYER_WIDTH,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
  },
});

const icons = {
  chevron: {
    type: 'feather',
    name: 'chevron-down',
    size: 42,
  },
};
