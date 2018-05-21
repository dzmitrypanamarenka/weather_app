import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import mapActions from './index';
import { mockGeolocationResolve, mockGeolocationReject } from './mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const {
  receiveMapCoordsAsync,
  updateMapRequest,
  updateMapSuccess,
  updateMapFailure,
} = mapActions;

describe('Map actions', () => {
  it('map updating request should be sent', () => {
    const action = updateMapRequest();
    expect(action).toEqual({ type: 'UPDATE_REQUEST' });
  });
  it('map coords should be received', () => {
    const action = updateMapSuccess({ coords: 'someData' });
    expect(action).toEqual({
      type: 'UPDATE_SUCCESS',
      payload: {
        coords: 'someData',
      },
    });
  });
  it('should inform us about map updating failure', () => {
    const action = updateMapFailure();
    expect(action).toEqual({ type: 'UPDATE_FAILURE' });
  });
});

describe('Map actions async', () => {
  it('async request to geo api for map coords', async () => {
    const store = mockStore({ data: {} });
    const coords = { lat: 52.520007, lng: 13.404954 };
    const expectedActions = [
      { type: 'UPDATE_REQUEST' },
      {
        type: 'UPDATE_SUCCESS',
        payload: {
          coords,
        },
      },
    ];

    global.navigator.geolocation = mockGeolocationResolve;
    await store.dispatch(receiveMapCoordsAsync());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('geo service api request failure message should be sent', async () => {
    const store = mockStore({ data: {} });
    const message = 'The Geolocation service failed';
    const expectedActions = [
      { type: 'UPDATE_REQUEST' },
      { type: 'UPDATE_FAILURE' },
      {
        type: 'DISPLAY_MESSAGE',
        payload: {
          message,
        },
      },
    ];

    global.navigator.geolocation = mockGeolocationReject;
    await store.dispatch(receiveMapCoordsAsync());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('absence of geo service api support message should be sent', async () => {
    const store = mockStore({ data: {} });
    const message = 'Your browser doesn\'t support geolocation';
    const expectedActions = [
      { type: 'UPDATE_FAILURE' },
      {
        type: 'DISPLAY_MESSAGE',
        payload: {
          message,
        },
      },
    ];

    global.navigator.geolocation = null;
    await store.dispatch(receiveMapCoordsAsync());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
