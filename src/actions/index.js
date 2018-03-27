import { createAction } from 'redux-actions';

export const sendError = createAction('SEND_ERROR', message => ({ message }));
export const updateMap = createAction('UPDATE_MAP', coords => ({ coords }));
export const updateInfo = createAction('UPDATE_INFO', info => ({ info }));