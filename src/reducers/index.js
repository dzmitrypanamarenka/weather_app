import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/';

const defaultLocation = {
  coords: {
    lat: 40.854885,
    lng: -88.081807
  },
  zoom: 16 };
const defaultInfo = { visibility: false, content: 'You\'re here' };

const options = handleActions({
  [actions.updateMap](state, { payload: { coords } }) {
    return { ...state, coords };
  },
}, { zoom: 16 });

const info = handleActions({
  [actions.updateInfo](state, { payload: { info } }) {
    return { ...state, ...info };
  },
  [actions.sendError](state, { payload: { message } }) {
    console.log(message);
    return { ...state, content: message };
  }
}, defaultInfo);

export default combineReducers({
  options,
  info
})