import { handleActions } from 'redux-actions';

import { mapActions } from '../../actions';

export default handleActions({
  [mapActions.updateMapRequest] (state) {
    return { ...state, isPending: true };
  },
  [mapActions.updateMapSuccess] (state, { payload: { coords } }) {
    return { ...state, coords, isPending: false };
  },
  [mapActions.updateMapFailure] (state) {
    return { ...state, isPending: false, failure: true };
  },
}, { zoom: 16, failure: false });
