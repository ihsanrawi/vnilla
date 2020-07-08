import { GET_MEDIA_SUCCESS } from '../type';

const initialState = {
  mediaFiles: [],
  mediaLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEDIA_SUCCESS:
      return { mediaFiles: action.payload, mediaLoaded: true };

    default:
      return state;
  }
};
