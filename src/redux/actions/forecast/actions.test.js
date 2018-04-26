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
  it('forecast request', () => {
    const action = forecastRequest();
    expect(action).toEqual({ type: 'FORECAST_REQUEST'})
  });
  it('forecast success', () => {
    const action = forecastSuccess({data: 'someData'});
    expect(action).toEqual({ type: 'FORECAST_SUCCESS', 'payload': {'data': {'data': 'someData'}}})
  });
  it('forecast failure', () => {
    const action = forecastFailure();
    expect(action).toEqual({ type: 'FORECAST_FAILURE'})
  });
});

describe('Forecast actions async', () => {
  const coords = { lat: 52.520007, lng: 13.404954 };
  const host = 'https://api.openweathermap.org';
  const query = querystring.stringify({
    lat: coords.lat,
    lon: coords.lng,
    APPID: process.env.REACT_APP_APPID,
    units: 'metric',
  });
  const pathName = url.format({
    pathname: '/data/2.5/weather',
    search: query,
  });

  beforeAll(() => {
    axios.defaults.adapter = httpAdapter;
  });

  it('forecast async success', async () => {
    const store = mockStore({ data: {} });
    const expectedActions = [
      { type: 'FORECAST_REQUEST' },
      { type: 'FORECAST_SUCCESS', payload: {data: mock } },
    ];

    nock(host).get(pathName).reply(200, mock);
    expect.assertions(1);

    await store.dispatch(receiveForecastAsync(coords));
    expect(store.getActions()).toEqual(expectedActions);

  });

  it('forecast async fail', async () => {
    const store = mockStore({ data: {} });
    const expectedActions = [
      { type: 'FORECAST_REQUEST' },
      { type: 'FORECAST_FAILURE' },
      {
        type: 'DISPLAY_MESSAGE',
        payload: { message: 'You\'re not allowed to connect to weather service' },
      },
    ];

    nock(host).get(pathName).reply(401);
    expect.assertions(1);

    await store.dispatch(receiveForecastAsync(coords));
    expect(store.getActions()).toEqual(expectedActions);
  })
});
