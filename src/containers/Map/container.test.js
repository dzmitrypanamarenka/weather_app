import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'google-maps-react';
import configureMockStore from 'redux-mock-store';

import {
  withConnect,
  withBindings,
  withRename,
  withGoogleMapApi,
} from './container';

describe('InfoWindow container tests', () => {
  it('should rename prop', () => {
    const WrappedComponent = withRename(Map);
    const wrapper = shallow(<WrappedComponent
      coords={{}}
    />);
    expect(wrapper.prop('center')).toBeTruthy();
  });
  // it('should bind onClick callback', () => {
  //   const WrappedComponent = withGoogleMapApi(Map);
  //   const wrapper = shallow(<WrappedComponent/>);
  //   console.log(wrapper.props())
  //   // expect(wrapper.prop('onClick')).toBeDefined();
  // });
  it('should bind onClick callback', () => {
    const WrappedComponent = withBindings(Map);
    const wrapper = shallow(<WrappedComponent/>);
    expect(wrapper.prop('onClick')).toBeDefined();
  });
  it('should connect component to the store', () => {
    const WrappedComponent = withConnect(Map);
    const mockStore = configureMockStore();
    const store = mockStore({
      mapConfig: {
        coords: {},
        zoom: 1,
      },
      mapInfo: {
        visibility: true,
      },
    });
    const wrapper = shallow(<WrappedComponent store={store}/>);

    expect(wrapper.prop('coords')).toBeDefined();
    expect(wrapper.prop('zoom')).toEqual(1);
    expect(wrapper.prop('visibility')).toBeTruthy();
  });
});

