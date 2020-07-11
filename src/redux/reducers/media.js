import { GET_MEDIA_SUCCESS, GET_ARTIST_LIST_SUCCESS } from '../type';

const initialState = {
  mediaFiles: [],
  artistList: [],
  mediaLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEDIA_SUCCESS:
      return { ...state, mediaFiles: action.payload, mediaLoaded: true };

    case GET_ARTIST_LIST_SUCCESS:
      return { ...state, artistList: action.payload };

    default:
      return state;
  }
};
