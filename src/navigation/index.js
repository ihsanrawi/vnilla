import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../services/NavigationService';
import RootStack from './RootStack';
import BottomBar from '../screens/BottomBar';

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
      <BottomBar />
    </NavigationContainer>
  );
};

export default RootNavigator;
