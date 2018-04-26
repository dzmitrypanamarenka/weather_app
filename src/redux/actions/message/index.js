import { createAction } from 'redux-actions';

const displayMessage = createAction('DISPLAY_MESSAGE', message => ({ message }));

export default displayMessage;
