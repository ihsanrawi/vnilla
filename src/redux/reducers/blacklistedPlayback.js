import { SET_PLAYBACK } from '../type';

const initialState = {
  isPlaying: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYBACK:
      return { ...state, isPlaying: action.payload };

    default:
      return state;
  }
};
