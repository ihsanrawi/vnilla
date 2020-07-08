/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Icon from './Icon';

const placeholder = require('../../assets/images/placeholder.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;

const RenderTrack = React.memo(
  (props) => {
    const { item, currentTrack, setCurrentTrack } = props;
    const coverSrc = item.artwork ? { uri: item.artwork } : placeholder;

    function onTrackPress() {
      if (item.id !== currentTrack.id) setCurrentTrack(item);
    }

    return (
      <TouchableOpacity style={styles.touchable} onPress={onTrackPress} activeOpacity={0.4}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{`${item.author} - ${item.album}`}</Text>
          <Icon style={styles.icon} {...icon.chevron} />
        </View>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) =>
    !(
      nextProps.currentTrack.id === nextProps.item.id ||
      prevProps.currentTrack.id === prevProps.item.id ||
      prevProps.item !== nextProps.item
    ),
);

function mapStateToProps(state) {
  return {
    currentTrack: state.playback.currentTrack,
  };
}

export default connect(mapStateToProps, actions)(RenderTrack);

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    marginTop: 10,
    paddingLeft: 15,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    height: 52,
    marginLeft: 15,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 14,
  },
  subtitle: {
    fontSize: 14,
  },
  icon: {
    padding: 10,
  },
});

const icon = {
  chevron: {
    type: 'feather',
    name: 'chevron-right',
    size: 24,
  },
};
