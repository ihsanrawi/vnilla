import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Button from '../components/Button';

const ArtistScreen = ({ artists }) => {
  return artists.map((artist, index) => {
    return (
      <View style={styles.container} key={index}>
        <Button label={artist} chevron />
      </View>
    );
  });
};

function mapStateToProps(state) {
  return {
    artists: state.media.artistList,
  };
}

export default connect(mapStateToProps, {})(ArtistScreen);

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
});
