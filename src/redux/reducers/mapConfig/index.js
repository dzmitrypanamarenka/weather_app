import { handleActions } from 'redux-actions';

import { mapActions } from '../../actions';

export default handleActions({
  [mapActions.updateMapRequest] (state) {
    return { ...state, updateMapStatus: 'requesting' };
  },
  [mapActions.updateMapSuccess] (state, { payload: { coords } }) {
    return { ...state, coords };
  },

  [mapActions.updateMapError] (state, { payload: { message } }) {
    return { ...state, message };
  },
}, { zoom: 16 });
