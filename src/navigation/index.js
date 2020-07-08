import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import MiniPlayer from '../components/MiniPlayer';
import RootStack from './RooStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="white" animated />
      <RootStack />
      <MiniPlayer />
    </NavigationContainer>
  );
};

export default RootNavigator;
