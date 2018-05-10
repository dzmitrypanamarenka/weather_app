import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Weather } from '../';
import expected from './mock';

const Component = <Weather forecast={expected}/>;

describe('Snapshot test', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(Component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Component render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component);
  });

  it('should render Weather component', () => {
    expect(wrapper.find('.weather-container').length)
      .toEqual(1);
  });
  it('should contains expected props', () => {
    const forecast = wrapper.prop('forecast');
    expect(forecast).toEqual(expected);
  });
});
