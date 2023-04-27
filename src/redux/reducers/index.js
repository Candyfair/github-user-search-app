import { combineReducers } from 'redux';
import counter from './counter';
import mode from './mode';

export default combineReducers({
  counter,
  mode,
});
