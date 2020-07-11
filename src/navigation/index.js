import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../services/NavigationService';
import RootStack from './RootStack';
import MiniPlayer from '../components/MiniPlayer';

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
      <MiniPlayer />
    </NavigationContainer>
  );
};

export default RootNavigator;
