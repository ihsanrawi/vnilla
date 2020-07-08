import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import LogoApple from '../../assets/images/logo_apple.svg';
import LogoMusic from '../../assets/images/logo_music.svg';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#dbdbdb" animated />
      <View>
        <LogoApple width={52} />
      </View>
      <View style={styles.logoMusic}>
        <LogoMusic width={128} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbdbdb',
  },
  logoMusic: {
    marginTop: 8,
    marginLeft: 15,
  },
});
