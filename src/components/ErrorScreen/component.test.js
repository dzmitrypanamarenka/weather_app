import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { ErrorScreen } from '../';

describe('Snapshot test',() => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<ErrorScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Component render',() => {
  it('should shallow render ErrorScreen component', () => {
    const wrapper = shallow(<ErrorScreen />);
    expect(wrapper.find('.error-screen').length).toEqual(1);
  });
  it('should check mount component', () => {
    const wrapper = mount(<ErrorScreen />);
    const mountedComponent = wrapper.find('.text.-title');
    const text = 'Oooops :/ Something goes wrong!';
    expect(mountedComponent.length).toEqual(1);
    expect(mountedComponent.text()).toEqual(text);
  });
});
