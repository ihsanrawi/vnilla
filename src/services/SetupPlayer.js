import TrackPlayer from 'react-native-track-player';

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

export default async function () {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.updateOptions(options);
}
