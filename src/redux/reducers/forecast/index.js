import {handleActions} from "redux-actions";
import { forecastActions } from "../../actions";

export default handleActions({
  [forecastActions.forecastRequest](state) {
    return { ...state, forecastStatus: 'requesting' };
  },
  [forecastActions.forecastSuccess](state, { payload }) {
    return { ...state, forecastStatus: 'success', forecastData: payload };
  },
  [forecastActions.forecastFailure](state, { payload: { error } }) {
    return { ...state, forecastStatus: 'failure', forecastData: error}
  }
}, {});