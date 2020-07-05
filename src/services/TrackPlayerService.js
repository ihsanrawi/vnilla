import TrackPlayer from 'react-native-track-player';
import { store } from '../redux/store';
import { SET_PLAYBACK } from '../redux/type';

class TrackPlayerService {
  setupPlayer = async () => {
    const capabilities = [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
    ];

    const compactCapabilities = [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    ];

    const options = {
      stopWithApp: true,
      capabilities,
      compactCapabilities,
    };

    await TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions(options);
  };

  trackControlListener = async () => {
    TrackPlayer.addEventListener('remote-play', () => {
      TrackPlayer.play();
      store.dispatch({ type: SET_PLAYBACK, payload: true });
    });

    TrackPlayer.addEventListener('remote-pause', () => {
      TrackPlayer.pause();
      store.dispatch({ type: SET_PLAYBACK, payload: false });
    });

    TrackPlayer.addEventListener('remote-next', () => {});
  };
}

const PlayerService = new TrackPlayerService();
export default PlayerService;
