import { CHANGE_MODE, SET_MODE } from '../actions/mode';

const initialState = {
  lightmode: true,
  mode: 'light',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        lightmode: !state.lightmode,
      };

    case SET_MODE:
      return {
        ...state,
        mode: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
