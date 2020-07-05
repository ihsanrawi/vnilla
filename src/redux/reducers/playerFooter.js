import { SHOW_FOOTER, HIDE_FOOTER } from '../type';

const initialState = {
  footerVisible: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FOOTER:
      return { footerVisible: true };

    case HIDE_FOOTER:
      return { footerVisible: false };

    default:
      return state;
  }
};
