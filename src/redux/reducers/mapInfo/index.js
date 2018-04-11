import { handleActions } from 'redux-actions';

import { infoActions } from '../../actions';

export default handleActions({
  [infoActions.renewMapInfo] (state, { payload: { info } }) {
    return { ...state, ...info };
  },
  [infoActions.bindMapEvents] (state, { payload: { events } }) {
    return { ...state, events };
  },
}, { visible: false, events: {} });
