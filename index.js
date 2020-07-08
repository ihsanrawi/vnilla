/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './src/App';
import { name as appName } from './app.json';
import PlayerService from './src/services/TrackPlayerService';
import bgService from './src/services/RemoteControlListener';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => bgService);
