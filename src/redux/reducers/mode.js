import { CHANGE_MODE } from '../actions/mode';

const initialState = {
  lightmode: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        lightmode: !state.lightmode,
      };

    default:
      return state;
  }
};

export default reducer;
