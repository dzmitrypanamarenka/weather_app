import { handleActions } from 'redux-actions';

import { renewMapInfo } from '../../actions';

export default handleActions({
  [renewMapInfo] (state, { payload: { info } }) {
    return { ...state, ...info };
  },
}, { visibility: false });
