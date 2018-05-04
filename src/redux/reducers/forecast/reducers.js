import { handleActions } from 'redux-actions';

import { forecastActions } from '../../actions';

const {
  forecastRequest,
  forecastSuccess,
  forecastFailure,
} = forecastActions;

export default handleActions({
  [forecastRequest] (state) {
    return { ...state, isPending: true };
  },
  [forecastSuccess] (state, { payload: { data } }) {
    return { ...state, success: true, isPending: false, forecastData: data };
  },
  [forecastFailure] (state) {
    return { ...state, failure: true, isPending: false };
  },
}, { failure: false });
