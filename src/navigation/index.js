import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MiniPlayer from '../components/MiniPlayer';
import LibraryStack from './LibraryStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <LibraryStack />
      <MiniPlayer />
    </NavigationContainer>
  );
};

export default RootNavigator;
