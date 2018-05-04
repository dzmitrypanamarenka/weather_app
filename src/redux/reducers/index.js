import { combineReducers } from 'redux';

import mapConfig from './mapConfig';
import mapInfo from './mapInfo';
import forecast from './forecast';
import message from './message';

export default combineReducers({
  mapConfig,
  mapInfo,
  forecast,
  message,
});
