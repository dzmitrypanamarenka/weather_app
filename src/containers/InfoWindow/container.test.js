import React from 'react';
import { InfoWindow } from 'google-maps-react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { withConnect, withRename } from './container';

describe('InfoWindow container tests', () => {
  it('should rename prop', () => {
    const WrappedComponent = withRename(InfoWindow);
    const wrapper = shallow(<WrappedComponent
      visibility={true}
      children={<div></div>}/>);
    expect(wrapper.prop('visible')).toBeTruthy();
  });
  it('should connect component to the store', () => {
    const WrappedComponent = withConnect(InfoWindow);
    const mockStore = configureMockStore();
    const store = mockStore({
      mapInfo: {
        visibility: true,
        marker: {},
      },
    });
    const wrapper = shallow(<WrappedComponent
      children={<div></div>}
      store={store}
    />);
    expect(wrapper.prop('visibility')).toBeTruthy();
    expect(wrapper.prop('marker')).toEqual({});
  });
});

