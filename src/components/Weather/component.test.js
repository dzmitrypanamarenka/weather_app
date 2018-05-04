import React from 'react';
import renderer from 'react-test-renderer';

import { Weather } from '../';
import mock from './mock';

describe('Snapshot test', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(<Weather forecast={mock}/>)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});

// describe('Component render', () => {
//   let wrapper;
//
//   beforeEach(() => {
//     wrapper = mount(LocationWithStore);
//   });
//
//   it('should render Location component', () => {
//     expect(wrapper.find('.container').length)
//       .toEqual(1);
//   });
//   it('should contains mounted components', () => {
//     expect(wrapper.containsAllMatchingElements([
//       Map,
//       Marker,
//       InfoWindow,
//       Message,
//     ]))
//       .toEqual(true);
//   });
// });
