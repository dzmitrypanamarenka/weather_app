import { handleActions } from "redux-actions";
import { mapActions } from "../../actions/index";

const defaultInfo = { visibility: false, content: 'You\'re here' };
export default handleActions({
  [mapActions.updateInfo](state, { payload: { info } }) {
    return { ...state, ...info };
  },
  [mapActions.sendError](state, { payload: { message } }) {
    return { ...state, content: message };
  }
}, defaultInfo);