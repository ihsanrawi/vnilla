/**
 * @format
 */

import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './src/App';
import { name as appName } from './app.json';
import PlayerService from './src/utils/TrackPlayerService';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlayerService.trackControlListener());
