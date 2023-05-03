import { GET_USER, SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from '../actions/search';

const initialState = {
  user: null,
  userInfo: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.value,
      };

    case SEARCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };

    case SEARCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
