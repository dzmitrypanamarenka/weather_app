import errors from '../error_utils/errors';

export default async () => {
  if (!navigator.geolocation) {
    return new errors.GeoAbsence();
  }
  try {
    const { coords } = await new Promise((res, rej) => (
      navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 })
    ));
    return {
      lat: coords.latitude,
      lng: coords.longitude,
    };
  } catch (err) {
    return new errors.GeoFailed();
  }
};
