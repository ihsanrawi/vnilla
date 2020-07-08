import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StatusBar, Animated, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import QuickScrollList from 'react-native-quick-scroll';
import TrackPlayer from 'react-native-track-player';

import * as actions from '../redux/actions';
import PlayerService from '../services/TrackPlayerService';
import RenderTrack from '../components/RenderTrack';

const SCREEEN_HEIGHT = Dimensions.get('window').height;
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const FOOTER_HEIGHT = 60;
const VIEWPORT_HEIGHT = SCREEEN_HEIGHT - (STATUSBAR_HEIGHT + FOOTER_HEIGHT);
const ITEM_HEIGHT = 75;

const TrackScreen = (props) => {
  const { currentTrack, mediaLoaded, mediaFiles, /* navigation, */ showFooter } = props;
  const [scrollY] = useState(new Animated.Value(0));
  const [modal, setModal] = useState({ visible: false, item: {} });

  /* useEffect(() => {
    const unsubscribe = navigation.addListener('focus', showFooter);
    return unsubscribe;
  }, [navigation, showFooter]); */

  useEffect(() => {
    props.getMedia();
    PlayerService.setupPlayer().then(
      () => currentTrack.id !== '000' && TrackPlayer.add(currentTrack),
    );
  }, []);

  const renderMargin = currentTrack.id !== '000' ? { marginBottom: 60, flex: 1 } : { flex: 1 };
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 20],
    outputRange: [20, 0],
    extrapolate: 'clamp',
  });

  if (mediaLoaded) {
    if (mediaFiles.length > 0) {
      return (
        <View style={renderMargin}>
          <QuickScrollList
            keyExtractor={(mediaFile) => mediaFile.id.toString()}
            data={mediaFiles}
            renderItem={({ item }) => <RenderTrack item={item} setOptions={setModal} />}
            itemHeight={ITEM_HEIGHT}
            viewportHeight={VIEWPORT_HEIGHT}
          />
        </View>
      );
    }
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.message} numberOfLines={2}>
          "Oops! We couldn't find any music on your device"
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.messageContainer}>
      <Text style={styles.message}> Searching </Text>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    currentTrack: state.playback.currentTrack,
    mediaFiles: state.media.mediaFiles,
    mediaLoaded: state.media.mediaLoaded,
  };
}

export default connect(mapStateToProps, actions)(TrackScreen);

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    marginVertical: 0,
    marginHorizontal: 55,
    textAlign: 'center',
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  thumbStyle: {
    width: 4,
    borderWidth: 0,
  },
  flatlistContent: {
    marginTop: 20,
    paddingBottom: 20,
  },
});
