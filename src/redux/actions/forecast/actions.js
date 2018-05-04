import { createAction } from 'redux-actions';

const forecastRequest = createAction('FORECAST_REQUEST');
const forecastSuccess = createAction('FORECAST_SUCCESS', data => ({ data }));
const forecastFailure = createAction('FORECAST_FAILURE');

export default {
  forecastRequest,
  forecastSuccess,
  forecastFailure,
};

