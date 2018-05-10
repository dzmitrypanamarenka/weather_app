import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { Location } from '../../components';
import { withConnect, withLifecycle } from './container';

describe('InfoWindow container tests', () => {
  it('should check that lifecycle hook works correctly', () => {
    const WrappedComponent = withLifecycle(Location);
    const displayMessageAction = jest.fn();
    const receiveMapCoordsAsync = jest.fn();
    const wrapper = shallow(<WrappedComponent
      displayMessageAction={displayMessageAction}
      receiveMapCoordsAsync={receiveMapCoordsAsync}/>);

    expect(wrapper.prop('displayMessageAction')).toHaveBeenCalled();
    expect(wrapper.prop('receiveMapCoordsAsync')).toHaveBeenCalled();
  });
  it('should connect component to the store', () => {
    const WrappedComponent = withConnect(Location);
    const mockStore = configureMockStore();
    const store = mockStore({
      mapInfo: {},
      message: { message: 'msg' },
    });
    const wrapper = shallow(<WrappedComponent store={store}/>);

    expect(wrapper.prop('mapInfo')).toBeDefined();
    expect(wrapper.prop('message')).toEqual('msg');
  });
});

