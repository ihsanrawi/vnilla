import { combineReducers } from 'redux';
import footer from './playerFooter';
import playback from './playback';
import player from './blacklistedPlayback';
import media from './media';

export default combineReducers({
  footer,
  playback,
  player,
  media,
});
