import { handleActions } from 'redux-actions';

import { mapActions } from '../../actions';

const defaultInfo = { visible: false, content: 'You\'re here' };
export default handleActions({
  [mapActions.updateMapInfo] (state, { payload: { info } }) {
    return { ...state, ...info };
  },
  [mapActions.sendMapError] (state, { payload: { message } }) {
    return { ...state, content: message };
  },
}, defaultInfo);
