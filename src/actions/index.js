import { createAction } from 'redux-actions';
import axios from 'axios';
import querystring from 'querystring';
import url from 'url';

export const sendError = createAction('SEND_ERROR', message => ({ message }));
export const updateMap = createAction('UPDATE_MAP', coords => ({ coords }));
export const updateInfo = createAction('UPDATE_INFO', info => ({ info }));
export const bindEvents = createAction('BIND_EVENTS', events => ({ events }));

export const forecastRequest = createAction('FORECAST_REQUEST');
export const forecastSuccess = createAction('FORECAST_SUCCESS');
export const forecastFailure = createAction('FORECAST_FAILURE');

export const receiveForecast = coords => async (dispatch) => {
  dispatch(forecastRequest);
  try{
    const query = querystring.stringify({
        lat: coords.lat,
        lon: coords.lng,
        APPID: '62b009e52319a77cd12a33cf560d91f8',
        units: 'metric'
    });
    const response = await axios.get(url.format({
      protocol: 'https:',
      hostname: 'api.openweathermap.org',
      pathname: '/data/2.5/weather',
      search: query
    }));
    dispatch(forecastSuccess(response.data));
  } catch (e){
    dispatch(forecastFailure(e));
  }
};