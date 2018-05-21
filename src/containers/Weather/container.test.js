import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { Weather, Loader, ErrorScreen } from '../../components';
import {
  withConnect,
  withLifecycle,
  withBindings,
  withLoader,
  withErrorScreen,
} from './container';
import forecastData from './mock';

describe('InfoWindow container tests', () => {
  it('should check that lifecycle hooks works correctly', () => {
    const WrappedComponent = withLifecycle(Weather);
    const displayMessageAction = jest.fn();
    const receiveMapCoordsAsync = jest.fn();
    const checkWeather = jest.fn();
    const mapConfig = {
      coords: {},
    };
    const wrapper = shallow(<WrappedComponent
      displayMessageAction={displayMessageAction}
      receiveMapCoordsAsync={receiveMapCoordsAsync}
      checkWeather={checkWeather}
      mapConfig={mapConfig}
    />);

    expect(wrapper.prop('displayMessageAction')).toHaveBeenCalled();
    expect(wrapper.prop('receiveMapCoordsAsync')).toHaveBeenCalled();
    expect(wrapper.prop('checkWeather')).toHaveBeenCalled();
  });
  it('should bind checkWeather callback', () => {
    const WrappedComponent = withBindings(Weather);
    const wrapper = shallow(<WrappedComponent/>);
    expect(wrapper.prop('checkWeather')).toBeDefined();
  });
  it('should connect component to the store', () => {
    const WrappedComponent = withConnect(Weather);
    const mockStore = configureMockStore();
    const store = mockStore({
      mapConfig: {},
      forecast: {},
    });
    const wrapper = shallow(<WrappedComponent store={store}/>);

    expect(wrapper.prop('mapConfig')).toBeDefined();
    expect(wrapper.prop('forecast')).toBeDefined();
  });
  it('should render Weather component', () => {
    const WrappedComponent = withBindings(Weather);
    const props = {
      forecast : {
        ...forecastData,
        failure: false,
      },
      mapConfig : {
        failure: false,
      },
    };
    const wrapper = shallow(<WrappedComponent {...props}/>);
    expect(wrapper.containsMatchingElement(<Weather />)).toEqual(true);
  });
  it('should render Loader component', () => {
    const WrappedComponent = withLoader(Weather);
    const props = {
      forecast : {
        failure: false,
      },
      mapConfig : {
        failure: false,
      },
    };
    const wrapper = mount(<WrappedComponent {...props}/>);
    expect(wrapper.containsMatchingElement(<Loader />)).toEqual(true);
  });
  it('should render ErrorScreen component because of forecast failure', () => {
    const WrappedComponent = withErrorScreen(Weather);
    const props = {
      forecast : {
        ...forecastData,
        failure: true,
      },
      mapConfig : {
        failure: false,
      },
    };
    const wrapper = mount(<WrappedComponent {...props}/>);
    expect(wrapper.containsMatchingElement(<ErrorScreen />)).toEqual(true);
  });
  it('should render ErrorScreen component because of map failure', () => {
    const WrappedComponent = withErrorScreen(Weather);
    const props = {
      forecast : {
        ...forecastData,
        failure: false,
      },
      mapConfig : {
        failure: true,
      },
    };
    const wrapper = mount(<WrappedComponent {...props}/>);
    expect(wrapper.containsMatchingElement(<ErrorScreen />)).toEqual(true);
  });
});

