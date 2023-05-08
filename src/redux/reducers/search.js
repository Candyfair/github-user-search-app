import {
  FETCH_USER,
  GET_USER,
  IS_ERROR,
  RECEIVED_USER,
} from '../actions/search';

const initialState = {
  username: 'octocat',
  userInfo: [],
  loading: false,
  isError404: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        username: action.value,
      };

    case FETCH_USER:
      return {
        ...state,
        username: action.value,
        loading: true,
      };

    case RECEIVED_USER:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };

    case IS_ERROR:
      return {
        ...state,
        isError404: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
