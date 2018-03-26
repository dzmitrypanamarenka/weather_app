import _ from 'lodash';
import { createAction } from 'redux-actions';

export const sendError = createAction('SEND_ERROR', status => {

});
export const updateMap = createAction('UPDATE_MAP', coords => ({ coords }));