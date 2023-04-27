export const CHANGE_MODE = 'CHANGE_MODE';
export const SET_MODE = 'SET_MODE';

export const changeMode = () => ({
  type: CHANGE_MODE,
});

export const setMode = (value) => ({
  type: SET_MODE,
  value,
});
