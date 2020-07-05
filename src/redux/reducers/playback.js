import { CURRENT_TRACK } from '../type';

const initialState = {
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
    case CURRENT_TRACK:
      return { ...state, currentTrack: action.payload };

    default:
      return state;
  }
};
