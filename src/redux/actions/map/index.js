import {createAction} from "redux-actions";

export const sendMapError = createAction('SEND_ERROR', message => ({ message }));
export const updateMapCoords = createAction('UPDATE_MAP', coords => ({ coords }));
export const updateMapInfo = createAction('UPDATE_INFO', info => ({ info }));
export const bindMapEvents = createAction('BIND_EVENTS', events => ({ events }));