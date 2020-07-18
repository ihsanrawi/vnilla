import { combineReducers } from 'redux';
import playback from './playback';
import player from './blacklistedPlayback';
import media from './media';

export default combineReducers({
  playback,
  player,
  media,
});
