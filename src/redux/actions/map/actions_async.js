import mapActions from './actions';
import errors from './errors';

const {
  updateMapRequest,
  updateMapSuccess,
  updateMapError,
} = mapActions;

export default () => async (dispatch) => {
  if (!navigator.geolocation) {
    dispatch(updateMapError(errors.absence));
  }
  dispatch(updateMapRequest);
  try {
    const { coords } = await new Promise((res, rej) => (
      navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 })
    ));
    const newCoords = {
      lat: coords.latitude,
      lng: coords.longitude,
    };
    dispatch(updateMapSuccess(newCoords));
  } catch (err) {
    dispatch(updateMapError(errors.failed));
  }
};
