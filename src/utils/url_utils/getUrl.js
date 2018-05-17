import querystring from 'querystring';
import url from 'url';

export default (coords) => {
  const query = querystring.stringify({
    lat: coords.lat,
    lon: coords.lng,
    APPID: process.env.APPID,
    units: 'metric',
  });
  return url.format({
    protocol: 'https:',
    hostname: 'api.openweathermap.org',
    pathname: '/data/2.5/weather',
    search: query,
  });
};
