import querystring from 'querystring';
import url from 'url';

export default (coords) => {
  const query = querystring.stringify({
    lat: coords.lat,
    lon: coords.lng,
    APPID: '62b009e52319a77cd12a33cf560d91f8',
    units: 'metric'
  });
  return url.format({
    protocol: 'https:',
    hostname: 'api.openweathermap.org',
    pathname: '/data/2.5/weather',
    search: query
  })
};