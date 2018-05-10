import React from 'react';
import { shallow } from 'enzyme';
import { Marker } from 'google-maps-react';
import configureMockStore from 'redux-mock-store';

import {
  withConnect,
  withBindings,
  withRename,
} from './container';

describe('InfoWindow container tests', () => {
  it('should rename prop', () => {
    const WrappedComponent = withRename(Marker);
    const wrapper = shallow(<WrappedComponent
      coords={{}}
    />);
    expect(wrapper.prop('position')).toBeTruthy();
  });
  it('should bind onClick callback', () => {
    const WrappedComponent = withBindings(Marker);
    const wrapper = shallow(<WrappedComponent/>);
    expect(wrapper.prop('onClick')).toBeDefined();
  });
  it('should connect component to the store', () => {
    const WrappedComponent = withConnect(Marker);
    const mockStore = configureMockStore();
    const store = mockStore({
      mapConfig: {
        coords: {},
      },
    });
    const wrapper = shallow(<WrappedComponent store={store}/>);

    expect(wrapper.prop('coords')).toBeDefined();
  });
});

