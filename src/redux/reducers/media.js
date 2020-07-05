import { GET_MEDIA_SUCCESS } from '../type';

const initialState = {
  mediaFile: [],
  mediaLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEDIA_SUCCESS:
      return { mediaFile: action.payload, mediaLoaded: true };

    default:
      return state;
  }
};
