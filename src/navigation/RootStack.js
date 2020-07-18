import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import MainStack from './MainStack';
import PlayerScreen from '../screens/PlayerScreen';

const screenOptions = {
  ...TransitionPresets.ModalPresentationIOS,
  gestureEnabled: true,
  cardOverlayEnabled: true,
};

function RootStack() {
  const Modal = createStackNavigator();
  return (
    <Modal.Navigator
      mode="modal"
      headerMode="none"
      initialRouteName="main"
      screenOptions={screenOptions}>
      <Modal.Screen name="main" component={MainStack} />
    </Modal.Navigator>
  );
}

export default RootStack;
