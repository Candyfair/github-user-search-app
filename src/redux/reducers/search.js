import { GET_USER } from '../actions/search';

const initialState = {
  user: 'octocat',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
