import { combineReducers } from 'redux';
import options from './options/index';
import info from './info/index';
import forecast from './forecast/index';

export default combineReducers({
  options,
  info,
  forecast
})