import { handleActions } from 'redux-actions';

import { forecastActions } from '../../actions';

export default handleActions({
  [forecastActions.forecastRequest] (state) {
    return { ...state, isPending: true };
  },
  [forecastActions.forecastSuccess] (state, { payload: { data } }) {
    return { ...state, success: true, isPending: false, forecastData: data };
  },
  [forecastActions.forecastFailure] (state) {
    return { ...state, failure: true, isPending: false };
  },
}, { failure: false });
