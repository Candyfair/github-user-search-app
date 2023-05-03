// Display the username stored in the state
export const GET_USER = 'GET_USER';

export const getUser = (value) => ({
  type: GET_USER,
  value,
});

// Search GitHub API
export const SEARCH_USER_REQUEST = 'SEARCH_USER_REQUEST';
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';
export const SEARCH_USER_FAILURE = 'SEARCH_USER_FAILURE';

export const searchUser = () => (dispatch) => {
  dispatch({ type: SEARCH_USER_REQUEST });

  const url = 'https://api.github.com/search/users?q=octocat';

  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: SEARCH_USER_SUCCESS,
        payload: json.items,
      });
      return json.items;
    })
    .catch((error) => {
      dispatch({
        type: SEARCH_USER_FAILURE,
        payload: error.message,
      });
      throw error;
    });
};
