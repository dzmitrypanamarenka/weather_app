import { handleActions } from 'redux-actions';
import { displayMessageAction } from '../../actions';

export default handleActions({
  [displayMessageAction] (state, { payload: { message } }) {
    return { ...state, message };
  },
}, {});
