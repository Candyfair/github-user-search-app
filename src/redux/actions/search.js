// Display the username stored in the state
export const GET_USER = 'GET_USER';

export const getUser = (value) => ({
  type: GET_USER,
  value,
});

// Search GitHub API
export const FETCH_USER = 'FETCH_USER';
export const RECEIVED_USER = 'RECEIVED_USER';

export const fetchUser = (value) => ({
  type: FETCH_USER,
  value,
});

export const receivedUser = (payload) => ({
  type: RECEIVED_USER,
  payload,
});
