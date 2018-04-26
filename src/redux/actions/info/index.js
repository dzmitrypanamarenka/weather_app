import { createAction } from 'redux-actions';

const renewMapInfo = createAction('RENEW_INFO', info => ({ info }));

export default renewMapInfo;

