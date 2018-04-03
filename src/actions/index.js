import { createAction } from 'redux-actions';
import axios from 'axios';
import getUrl from "../lib/getUrl";

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
    const response = await axios.get(getUrl(coords));
    dispatch(forecastSuccess(response.data));
  } catch (e){
    dispatch(forecastFailure(e));
  }
};