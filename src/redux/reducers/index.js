import { combineReducers } from 'redux';

import mapConfig from './mapConfig/reducers';
import mapInfo from './mapInfo/reducers';
import forecast from './forecast/reducers';
import message from './message/reducers';

export default combineReducers({
  mapConfig,
  mapInfo,
  forecast,
  message,
});
