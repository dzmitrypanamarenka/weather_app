import { handleActions } from 'redux-actions';

import { mapActions } from '../../actions';

const {
  updateMapRequest,
  updateMapSuccess,
  updateMapFailure,
} = mapActions;

export default handleActions({
  [updateMapRequest] (state) {
    return { ...state, isPending: true };
  },
  [updateMapSuccess] (state, { payload: { coords } }) {
    return { ...state, coords, isPending: false };
  },
  [updateMapFailure] (state) {
    return { ...state, isPending: false, failure: true };
  },
}, { zoom: 16, failure: false });
