import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { Message } from '../';

describe('Snapshot test',() => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<Message />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Component render',() => {
  it('should shallow render Message component and check text from props', () => {
    const message = 'some message';
    const wrapper = shallow(<Message message={ message }/>);
    expect(wrapper.find('.text.-message').length).toEqual(1);
    expect(wrapper.text()).toEqual(message);
  });
});
