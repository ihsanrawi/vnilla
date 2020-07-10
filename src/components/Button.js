/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import color from '../utils/color';
import Icon from './Icon';

const CONTAINER_WIDTH = Dimensions.get('window').width * 0.87 + 10;

const Button = (props) => {
  const { label, sublabel, chevron, theme, onPress } = props;
  const textColor = theme && theme.length ? color[theme][4] : color.black;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={[styles.label, { color: textColor }]} numberOfLines={1}>
          {label}
        </Text>
        {sublabel ? <Text style={[styles.sublabel, { color: textColor }]}>{sublabel}</Text> : null}
      </View>
      {chevron ? (
        <View style={styles.chevronContainer}>
          <Icon {...icons.chevronRight} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 48,
    borderBottomColor: `${color.gray[3]}`,
    borderBottomWidth: 1,
    width: CONTAINER_WIDTH,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  label: {
    fontSize: 20,
  },
  sublabel: {},
  chevronContainer: {},
});

const icons = {
  chevronRight: {
    type: 'feather',
    name: 'chevron-right',
    size: 24,
  },
};
