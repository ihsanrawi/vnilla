/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';
import Button from '../components/Button';

const LibraryScreen = (props) => {
  const { navigation } = props;

  useEffect(() => {
    props.getMedia();
    props.getArtists();
  }, []);

  return (
    <View style={styles.container}>
      <Button {...buttons.artist} onPress={() => navigation.navigate(buttons.artist.name)} />
      <Button {...buttons.album} onPress={() => navigation.navigate(buttons.album.name)} />
      <Button {...buttons.track} onPress={() => navigation.navigate(buttons.track.name)} />
    </View>
  );
};

export default connect(null, actions)(LibraryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const buttons = {
  artist: {
    name: 'artist',
    label: 'Artists',
    theme: 'red',
    chevron: true,
  },
  album: {
    name: 'album',
    label: 'Albums',
    theme: 'red',
    chevron: true,
  },
  track: {
    name: 'track',
    label: 'Tracks',
    theme: 'red',
    chevron: true,
  },
};
