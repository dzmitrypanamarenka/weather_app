import { createAction } from 'redux-actions';

const renewMapInfo = createAction('RENEW_INFO', info => ({ info }));
const bindMapEvents = createAction('BIND_EVENTS', events => ({ events }));

export default {
  renewMapInfo,
  bindMapEvents,
};
