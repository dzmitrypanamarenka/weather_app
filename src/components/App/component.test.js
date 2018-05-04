import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { App, Location } from '../';

describe('Snapshot test',() => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Shallow render component',() => {
  it('should render App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.router-wrap').length).toEqual(1);
  });
});

describe('Render mounted components',() => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('should contains Location component', () => {
    expect(wrapper.containsMatchingElement(<Location />)).toEqual(true);
  });
  it('should contains geo map', () => {
    expect(wrapper.find('.link.-weather').length).toBeGreaterThan(0);
  });
});

