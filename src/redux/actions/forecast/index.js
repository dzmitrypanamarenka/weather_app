import {createAction} from "redux-actions";

export const forecastRequest = createAction('FORECAST_REQUEST');
export const forecastSuccess = createAction('FORECAST_SUCCESS');
export const forecastFailure = createAction('FORECAST_FAILURE');