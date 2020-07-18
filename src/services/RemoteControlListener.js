import TrackPlayer from 'react-native-track-player';
import { store } from '../redux/store';

let flag = false;

async function backgroundPlayback(track) {
  if (flag) return;
  flag = true;
  setTimeout(() => (flag = false), 250);
  await TrackPlayer.reset();
  await TrackPlayer.add(track);
  store.dispatch({ type: 'current_track', payload: track });
  TrackPlayer.play();
  store.dispatch({ type: 'set_playback', payload: true });
}

module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
    store.dispatch({ type: 'set_playback', payload: true });
  });

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
    store.dispatch({ type: 'set_playback', payload: false });
  });

  TrackPlayer.addEventListener('remote-next', () => {
    const { playback, media } = store.getState();
    const { currentTrack } = playback;
    const { mediaFiles } = media;
    backgroundPlayback(
      currentTrack.index === mediaFiles.length - 1
        ? mediaFiles[0]
        : mediaFiles[currentTrack.index + 1],
    );
  });

  TrackPlayer.addEventListener('remote-previous', () => {
    const { playback, media } = store.getState();
    const { currentTrack } = playback;
    const { mediaFiles } = media;
    backgroundPlayback(
      currentTrack.index === 0
        ? mediaFiles[mediaFiles.length - 1]
        : mediaFiles[currentTrack.index - 1],
    );
  });

  TrackPlayer.addEventListener('playback-queue-ended', ({ position }) => {
    const { media } = store.getState();
    const { mediaFiles, currentTrack } = media;
    if (position > 0) {
      backgroundPlayback(
        currentTrack.index === mediaFiles.length - 1
          ? mediaFiles[0]
          : mediaFiles[currentTrack.index + 1],
      );
    }
  });
};
