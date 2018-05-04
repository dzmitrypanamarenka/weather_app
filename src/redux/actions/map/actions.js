import { createAction } from 'redux-actions';

const updateMapRequest = createAction('UPDATE_REQUEST');
const updateMapSuccess = createAction('UPDATE_SUCCESS', ({ coords }) => ({ coords }));
const updateMapFailure = createAction('UPDATE_FAILURE');

export default {
  updateMapRequest,
  updateMapSuccess,
  updateMapFailure,
};
