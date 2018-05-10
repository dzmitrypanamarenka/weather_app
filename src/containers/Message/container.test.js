import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { Message } from '../../components';
import {
  withConnect,
  withSettedProps,
} from './container';

describe('InfoWindow container tests', () => {
  it('should provide store to the component', () => {
    const WrappedComponent = withSettedProps(Message);
    const wrapper = shallow(<WrappedComponent/>);
    expect(wrapper.prop('store')).toBeDefined();
  });
  it('should connect component to the store', () => {
    const WrappedComponent = withConnect(Message);
    const mockStore = configureMockStore();
    const store = mockStore({
      message: {
        message: 'msg',
      },
    });
    const wrapper = shallow(<WrappedComponent store={store}/>);
    expect(wrapper.prop('message')).toBeDefined();
  });
});

