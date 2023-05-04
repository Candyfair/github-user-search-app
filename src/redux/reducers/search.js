import { FETCH_USER, GET_USER, RECEIVED_USER } from '../actions/search';

const initialState = {
  user: 'octocat',
  userInfo: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.value,
      };

    case FETCH_USER:
      return {
        ...state,
        loading: true,
      };

    case RECEIVED_USER:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
