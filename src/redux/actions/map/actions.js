import { createAction } from 'redux-actions';

const updateMapRequest = createAction('UPDATE_REQUEST');
const updateMapSuccess = createAction('UPDATE_SUCCESS', coords => ({ coords }));
const updateMapError = createAction('UPDATE_ERROR', message => ({ message }));

export default {
  updateMapRequest,
  updateMapSuccess,
  updateMapError,
};
