import { combineReducers } from 'redux';
import options from './options';
import info from './info';
import forecast from './forecast';

export default combineReducers({
  options,
  info,
  forecast
})