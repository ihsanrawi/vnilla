import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import LibraryScreen from '../screens/LibraryScreen';
import ArtistScreen from '../screens/ArtistScreen';
import AlbumScreen from '../screens/AlbumScreen';
import TrackScreen from '../screens/TrackScreen';

const screenOptions = {
  ...TransitionPresets.ModalPresentationIOS,
  gestureEnabled: false,
  cardOverlayEnabled: false,
};

function MainStack() {
  const Library = createStackNavigator();
  return (
    <Library.Navigator
      mode="modal"
      headerMode="screen"
      initialRouteName="library"
      screenOptions={screenOptions}>
      <Library.Screen name="library" component={LibraryScreen} />
      <Library.Screen name="artist" component={ArtistScreen} />
      <Library.Screen name="album" component={AlbumScreen} />
      <Library.Screen name="track" component={TrackScreen} />
    </Library.Navigator>
  );
}

export default MainStack;
