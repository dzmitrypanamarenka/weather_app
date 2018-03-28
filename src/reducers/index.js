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

const forecast = handleActions({
  [actions.forecastRequest](state) {
    return { ...state, forecastStatus: 'requesting' };
  },
  [actions.forecastSuccess](state, { payload }) {
    return { ...state, forecastStatus: 'success', forecastData: payload };
  },
  [actions.forecastFailure](state, { payload: { error } }) {
    return { ...state, forecastStatus: 'failure', forecastData: error}
  }
}, {});

export default combineReducers({
  options,
  info,
  forecast
})