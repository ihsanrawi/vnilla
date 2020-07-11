import { store } from '../store';
import { GET_ARTIST_LIST_SUCCESS } from '../type';
import { getArtist } from '../../utils/MediaCleaner';

export const getArtists = () => async (dispatch) => {
  try {
    const { media } = store.getState();

    if (media.mediaLoaded) {
      const artistList = getArtist(media.mediaFiles);
      dispatch({ type: GET_ARTIST_LIST_SUCCESS, payload: artistList });
    }
  } catch (error) {
    console.error(error);
  }
};
