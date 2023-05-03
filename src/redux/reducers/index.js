import { combineReducers } from 'redux';
import mode from './mode';
import search from './search';

export default combineReducers({
  mode,
  search,
});
