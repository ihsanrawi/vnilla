import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import color from '../utils/color';

const SCREEN_WIDTH = Dimensions.get('window').width;
const LABEL_WIDTH = SCREEN_WIDTH * 0.82;

const TrackInfo = ({ currentTrack }) => {
  const { title, artist, album } = currentTrack;
  const sublabel = `${artist} - ${album}`;

  return (
    <View style={styles.container}>
      <Text style={styles.label} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.sublabel}>{sublabel}</Text>
    </View>
  );
};

export default TrackInfo;

const styles = StyleSheet.create({
  container: { marginTop: 16, alignItems: 'center' },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    width: LABEL_WIDTH,
    backgroundColor: 'cyan',
    textAlign: 'center',
  },
  sublabel: { color: color.red[4], marginTop: 8, fontSize: 18 },
});
