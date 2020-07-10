/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { enableScreens } from 'react-native-screens';
import App from './src/App';
import { name as appName } from './app.json';
import bgService from './src/services/RemoteControlListener';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => bgService);
