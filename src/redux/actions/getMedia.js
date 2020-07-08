import { RNAndroidAudioStore } from 'react-native-get-music-files';
import RNFetchBlob from 'rn-fetch-blob';
import { store } from '../store';
import { GET_MEDIA_SUCCESS } from '../type';
import cleanupMedia from '../../utils/MediaCleaner';

const options = {
  title: true,
  artist: true,
  album: true,
  duration: true,
  cover: false,
  blured: false,
};

const getMediaWithCovers = async () => {
  const coverFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/.AwsomeProject`;
  const results = await RNAndroidAudioStore.getAll({
    ...options,
    cover: true,
    coverFolder,
  });
  return cleanupMedia(results);
};

export const getMedia = () => async (dispatch) => {
  try {
    const { media } = store.getState();

    if (media.mediaLoaded) {
      const mediaWithCovers = await getMediaWithCovers();
      dispatch({ type: GET_MEDIA_SUCCESS, payload: mediaWithCovers });
    } else {
      const results = await RNAndroidAudioStore.getAll(options);
      const cleanedMedia = cleanupMedia(results);

      dispatch({ type: GET_MEDIA_SUCCESS, payload: cleanedMedia });
      const mediaWithCovers = await getMediaWithCovers();
      dispatch({ type: GET_MEDIA_SUCCESS, payload: mediaWithCovers });
    }
  } catch (error) {
    console.error(error);
  }
};
