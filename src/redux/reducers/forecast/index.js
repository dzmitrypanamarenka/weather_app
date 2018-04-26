import { handleActions } from 'redux-actions';

import { forecastActions } from '../../actions';

export default handleActions({
  [forecastActions.forecastRequest] (state) {
    return { ...state, isPending: true };
  },
  [forecastActions.forecastSuccess] (state, { payload }) {
    return { ...state, success: true, forecastData: payload };
  },
  [forecastActions.forecastFailure] (state, { payload: { error } }) {
    return { ...state, success: false, forecastData: error };
  },
}, {});
