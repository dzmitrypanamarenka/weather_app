import querystring from 'querystring';
import url from 'url';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

import forecastActions from './index';
import mock from './mock';

const {
  forecastRequest,
  forecastSuccess,
  forecastFailure,
  receiveForecastAsync,
} = forecastActions;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Forecast actions', () => {
  it('forecast request should be sent', () => {
    const action = forecastRequest();
    expect(action).toEqual({ type: 'FORECAST_REQUEST' });
  });
  it('forecast data should be received successfuly', () => {
    const action = forecastSuccess({ data: 'someData' });
    expect(action).toEqual({
      type: 'FORECAST_SUCCESS',
      payload: { data: { data: 'someData' } },
    });
  });
  it('forecast request failure information should be sent', () => {
    const action = forecastFailure();
    expect(action).toEqual({ type: 'FORECAST_FAILURE' });
  });
});

describe('Forecast actions async', () => {
  const coords = { lat: 52.520007, lng: 13.404954 };
  const host = 'https://api.openweathermap.org';
  const query = querystring.stringify({
    lat: coords.lat,
    lon: coords.lng,
    APPID: process.env.APPID,
    units: 'metric',
  });
  const pathName = url.format({
    pathname: '/data/2.5/weather',
    search: query,
  });
  let store;

  beforeAll(() => {
    axios.defaults.adapter = httpAdapter;
  });

  beforeEach(() => {
    store = mockStore({ data: {} });
  });

  it('async request to weather service api', async () => {
    const expectedActions = [
      { type: 'FORECAST_REQUEST' },
      { type: 'FORECAST_SUCCESS', payload: { data: mock } },
    ];

    nock(host)
      .get(pathName)
      .reply(200, mock);
    expect.assertions(1);

    await store.dispatch(receiveForecastAsync(coords));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('failure of async request to weather service api', async () => {
    const expectedActions = [
      { type: 'FORECAST_REQUEST' },
      { type: 'FORECAST_FAILURE' },
      {
        type: 'DISPLAY_MESSAGE',
        payload: { message: 'You\'re not allowed to connect to weather service' },
      },
    ];

    nock(host)
      .get(pathName)
      .reply(401);
    expect.assertions(1);

    await store.dispatch(receiveForecastAsync(coords));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
