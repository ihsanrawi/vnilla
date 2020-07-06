import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const INDETERMINATE_MAX_WIDTH = 0.6;

const ProgressBar = (props) => {
  const { color, indeterminate, style, visible } = props;

  const [state, setState] = useState({
    width: 0,
    timer: new Animated.Value(0),
    fade: new Animated.Value(0),
  });

  const [indeterminateAnimation, setIndeterminateAnimation] = useState();

  const onLayout = (event) => {
    const { width: previousWidth } = state;
    setState({ width: event.nativeEvent.layout.width }, () => {
      if (visible && previousWidth === 0) {
        startAnimation();
      }
    });
  };

  const startAnimation = () => {
    const {
      indeterminate,
      progress,
      theme: {
        animation: { scale },
      },
    } = props;
    const { fade, timer } = state;

    Animated.timing(fade, {
      duration: 200 * scale,
      toValue: 1,
      useNativeDriver: true,
      isInteraction: false,
    }).start();

    if (indeterminate) {
      if (!this.indeterminateAnimation) {
        this.indeterminateAnimation = Animated.timing(timer, {
          duration: INDETERMINATE_DURATION,
          toValue: 1,
          useNativeDriver: true,
          isInteraction: false,
        });
      }
      timer.setValue(0);
      Animated.loop(this.indeterminateAnimation).start();
    } else {
      Animated.timing(timer, {
        duration: 200 * scale,
        toValue: progress ? progress : 0,
        useNativeDriver: true,
        isInteraction: false,
      }).start();
    }
  };

  const stopAnimation = () => {
    const { fade } = state;
    const { scale } = props.theme.animation;

    if (indeterminateAnimation) {
      indeterminateAnimation.stop();
    }

    Animated.timing(fade, {
      duration: 200 * scale,
      toValue: 0,
      useNativeDriver: true,
      isInteraction: false,
    }).start();
  };

  const { fade, timer, width } = state;
  const tintColor = color;
  const trackTintColor = color.replace('1', '0.2');

  return (
    <View onLayout={onLayout}>
      <Animated.View
        style={[styles.container, { backgroundColor: trackTintColor, opacity: fade }, style]}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              backgroundColor: tintColor,
              width,
              transform: [
                {
                  translateX: timer.interpolate(
                    indeterminate
                      ? {
                          inputRange: [0, 0.5, 1],
                          outputRange: [
                            -1 * 0.5 * width,
                            -1 * 0.5 * INDETERMINATE_MAX_WIDTH * width,
                            0.7 * width,
                          ],
                        }
                      : {
                          inputRange: [0, 1],
                          outputRange: [-1 * 0.5 * width, 0],
                        },
                  ),
                },
                {
                  scaleX: timer.interpolate(
                    indeterminate
                      ? {
                          inputRange: [0, 0.5, 1],
                          outputRange: [0.0001, INDETERMINATE_MAX_WIDTH, 0.0001],
                        }
                      : {
                          inputRange: [0, 1],
                          outputRange: [0.0001, 1],
                        },
                  ),
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </View>
  );
};

ProgressBar.defaultProps = {
  visible: true,
  progress: 0,
  theme: {
    animation: {
      scale: 1,
    },
  },
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    height: 4,
    overflow: 'hidden',
  },
  progressBar: {
    flex: 1,
  },
});
