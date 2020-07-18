import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import PlaybackControls from '../components/PlaybackControls';
import TrackInfo from '../components/TrackInfo';
import Cover from '../components/Cover';
import ProgressSlider from '../components/ProgressSlider';
import ChevronWide from '../../assets/images/chevron_wide.svg';
import VolumeSlider from '../components/VolumeSlider';

const PlayerScreen = (props) => {
  const { currentTrack } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeContainer}>
        <ChevronWide width={42} height={42} />
      </View>
      <Cover />
      <ProgressSlider currentTrack={currentTrack} />
      <TrackInfo currentTrack={currentTrack} />
      <PlaybackControls />
      <VolumeSlider />
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return { currentTrack: state.media.currentTrack };
}

export default connect(mapStateToProps, actions)(PlayerScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
});
