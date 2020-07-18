/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { onGestureEvent, withSpring } from 'react-native-redash';

import PlayerScreen from './PlayerScreen';
import MiniPlayer from '../components/MiniPlayer';

const { height } = Dimensions.get('window');
const MINIMIZED_PLAYER_HEIGHT = 64;
const SNAP_TO_TOP = 0;
const SNAP_TO_BOTTOM = height - MINIMIZED_PLAYER_HEIGHT;
const config = {
  damping: 15,
  mass: 1,
  stiffness: 150,
  overshootClamping: false,
  restSpeedThreshold: 0.1,
  restDisplacementThreshold: 0.1,
};
const { Value, interpolate } = Animated;

const BottomBar = () => {
  const translationY = new Value(0);
  const velocityY = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const gestureHandler = onGestureEvent({
    state,
    translationY,
    velocityY,
  });
  const translateY = withSpring({
    state,
    value: translationY,
    velocity: velocityY,
    snapPoints: [SNAP_TO_TOP, SNAP_TO_BOTTOM],
    config,
  });
  const opacity = interpolate(translateY, {
    inputRange: [SNAP_TO_BOTTOM - MINIMIZED_PLAYER_HEIGHT, SNAP_TO_BOTTOM],
    outputRange: [0, 1],
  });

  const overlayOpacity = interpolate(translateY, {
    inputRange: [SNAP_TO_BOTTOM - MINIMIZED_PLAYER_HEIGHT, SNAP_TO_BOTTOM],
    outputRange: [0, 1],
  });

  return (
    <>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={[styles.playerWrapper, { transform: [{ translateY }] }]}>
          <PlayerScreen onPress={() => true} />
          <Animated.View
            style={{ ...StyleSheet.absoluteFillObject, opacity: overlayOpacity }}
            pointerEvents="none"
          />
          <Animated.View
            style={{
              opacity,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: MINIMIZED_PLAYER_HEIGHT,
            }}>
            <MiniPlayer />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  playerWrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'lightblue',
  },
});
