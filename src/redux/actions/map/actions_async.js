import mapActions from './actions';
import { displayMessageAction } from '../';
import messages from './config';

const {
  updateMapRequest,
  updateMapSuccess,
  updateMapFailure,
} = mapActions;

export default () => async (dispatch) => {
  if (!navigator.geolocation) {
    dispatch(updateMapFailure());
    dispatch(displayMessageAction(messages.absence));
    return false;
  }
  dispatch(updateMapRequest());
  try {
    const { coords } = await new Promise((res, rej) => (
      navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 })
    ));
    const newCoords = {
      lat: coords.latitude,
      lng: coords.longitude,
    };
    dispatch(updateMapSuccess({ coords: newCoords }));
  } catch (err) {
    dispatch(updateMapFailure());
    dispatch(displayMessageAction(messages.failed));
  }
};
