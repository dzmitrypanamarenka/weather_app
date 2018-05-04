import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { InfoWindow, Map, Marker } from 'google-maps-react';

import { Location, Message } from '../';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  mapConfig: {
    coords: {
      lat: 52.520007,
      lng: 13.404954,
    },
    zoom: 10,
  },
  mapInfo: { visibility: true },
});
const LocationWithStore = (
  <Provider store={store}>
    <MemoryRouter>
      <Location/>
    </MemoryRouter>
  </Provider>
);

describe('Snapshot test', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(LocationWithStore)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});

describe('Component render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(LocationWithStore);
  });

  it('should render Location component', () => {
    expect(wrapper.find('.container').length)
      .toEqual(1);
  });
  it('should contains mounted components', () => {
    expect(wrapper.containsAllMatchingElements([
      Map,
      Marker,
      InfoWindow,
      Message,
    ]))
      .toEqual(true);
  });
});

