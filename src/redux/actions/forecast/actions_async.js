import axios from 'axios';

import { getUrl } from '../../../utils';
import forecastActions from './actions';
import { displayMessageAction } from '../';
import messages from './config';

const {
  forecastRequest,
  forecastSuccess,
  forecastFailure,
} = forecastActions;

export default coords => async (dispatch) => {
  dispatch(forecastRequest());
  try {

    const response = await axios.get(getUrl(coords));
    dispatch(forecastSuccess(response.data));
  } catch (err) {
    let message;
    if(err.response){
      const { status } = err.response;
      message = messages[status];
    }
    dispatch(forecastFailure());
    dispatch(displayMessageAction(message));
  }
};
