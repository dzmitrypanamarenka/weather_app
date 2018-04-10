import { createAction } from 'redux-actions';

const sendMapError = createAction('SEND_ERROR', message => ({ message }));
const updateMapCoords = createAction('UPDATE_MAP', coords => ({ coords }));
const updateMapInfo = createAction('UPDATE_INFO', info => ({ info }));
const bindMapEvents = createAction('BIND_EVENTS', events => ({ events }));

export default {
  sendMapError,
  updateMapCoords,
  updateMapInfo,
  bindMapEvents,
};
