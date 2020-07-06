import TrackPlayer from 'react-native-track-player';
import { CURRENT_TRACK, SET_PLAYBACK, PLAY_NEXT } from '../type';

export const setCurrentTrack = (currentTrack) => async (dispatch) => {
  try {
    await TrackPlayer.reset();
    await TrackPlayer.add(currentTrack);
    dispatch({ type: CURRENT_TRACK, payload: currentTrack });
    TrackPlayer.play();
    dispatch({ type: '', payload: true });
  } catch (error) {
    console.log(error);
  }
};

export const setPlayback = (isPlaying) => {
  isPlaying ? TrackPlayer.play() : TrackPlayer.pause();
  return { type: SET_PLAYBACK, payload: isPlaying };
};

export const setPlayNext = () => {
  TrackPlayer.skipToNext();
  dispatch({ type: PLAY_NEXT, payload });
};
