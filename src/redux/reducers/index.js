import { combineReducers } from 'redux';
import footer from './playerFooter';
import playback from './playback';
import blacklistedPlayback from './blacklistedPlayback';
import media from './media';

export default combineReducers({
  footer,
  playback,
  blacklistedPlayback,
  media,
});
