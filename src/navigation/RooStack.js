import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import PlayerScreen from '../screens/PlayerScreen';

const screenOptions = {
  ...TransitionPresets.ModalPresentationIOS,
  gestureEnabled: true,
  cardOverlayEnabled: true,
};

function RootStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      initialRouteName="player"
      screenOptions={screenOptions}>
      <Stack.Screen name="player" component={PlayerScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
