import { SET_PLAYBACK, GET_MEDIA_SUCCESS, GET_ARTIST_LIST_SUCCESS, CURRENT_TRACK } from '../type';

const initialState = {
  isPlaying: false,
  mediaLoaded: false,
  mediaFiles: [],
  artistList: [],
  currentTrack: {
    id: '000',
    title: 'AwsomeProject',
    artist: 'Ihsan Rawi',
    duration: 0,
    artwork: 'cover',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYBACK:
      return { ...state, isPlaying: action.payload };

    case GET_MEDIA_SUCCESS:
      return { ...state, mediaFiles: action.payload, mediaLoaded: true };

    case GET_ARTIST_LIST_SUCCESS:
      return { ...state, artistList: action.payload };

    case CURRENT_TRACK:
      return { ...state, currentTrack: action.payload };

    default:
      return state;
  }
};
