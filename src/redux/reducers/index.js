import { combineReducers } from 'redux';

import mapConfig from './mapConfig';
import mapInfo from './mapInfo';
import forecast from './forecast';

export default combineReducers({
  mapConfig,
  mapInfo,
  forecast,
});
