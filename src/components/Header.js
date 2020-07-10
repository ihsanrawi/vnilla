import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const CONTAINER_WIDTH = Dimensions.get('window').width * 0.9 + 10;

const Header = () => {
  return (
    <View style={[styles.container, { width: CONTAINER_WIDTH }]}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    flexDirection: 'row',
    borderColor: 'red',
    borderRadius: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});
