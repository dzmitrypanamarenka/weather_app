import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/';

const defaultInfo = { visibility: false, content: 'You\'re here' };

const options = handleActions({
  [actions.updateMap](state, { payload: { coords } }) {
    return { ...state, coords };
  },
  [actions.bindEvents](state, { payload: { events } }) {
    return { ...state, events }
  }
}, { zoom: 16, events: {} });

const info = handleActions({
  [actions.updateInfo](state, { payload: { info } }) {
    return { ...state, ...info };
  },
  [actions.sendError](state, { payload: { message } }) {
    return { ...state, content: message };
  }
}, defaultInfo);

export default combineReducers({
  options,
  info
})