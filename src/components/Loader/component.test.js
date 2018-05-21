import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { Loader } from '../';

describe('Snapshot test',() => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<Loader />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Component render',() => {
  it('should shallow render Loader component', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('.loader').length).toEqual(1);
  });
});
