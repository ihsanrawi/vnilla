import TrackPlayer from 'react-native-track-player';

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
    });

    TrackPlayer.addEventListener('remote-pause', () => {
      TrackPlayer.pause();
    });

    TrackPlayer.addEventListener('remote-next', () => {});
  };
}

const PlayerService = new TrackPlayerService();
export default PlayerService;
