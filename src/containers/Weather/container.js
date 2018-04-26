import { connect } from 'react-redux';
import _ from 'lodash';
import React from 'react';
import {
  compose,
  lifecycle,
  withHandlers,
  branch,
  renderComponent
} from 'recompose';

import ErrorScreen from '../../components/ErrorScreen';
import Loader from '../../components/Loader';
import {
  mapActions,
  forecastActions,
  displayMessageAction
} from '../../redux/actions';

const { receiveForecastAsync } = forecastActions;
const { receiveMapCoordsAsync } = mapActions;

const mapStateToProps = ({ mapConfig, forecast }) => ({
  mapConfig,
  forecast,
});

export default compose(
  connect(
    mapStateToProps,
    {
      receiveForecastAsync,
      receiveMapCoordsAsync,
      displayMessageAction,
    }
  ),
  withHandlers({
    checkWeather: ({ receiveForecastAsync }) => coords => receiveForecastAsync(coords)
  }),
  lifecycle({
    componentDidMount () {
      this.props.displayMessageAction('');
      this.props.receiveMapCoordsAsync();
      const { coords } = this.props.mapConfig;
      if(coords){
        this.props.checkWeather(coords);
      }
    },
    componentDidUpdate (prevProps, prevState) {
      const newCoords = this.props.mapConfig.coords;
      const actualCoords = prevProps.mapConfig.coords;

      if (!_.isEqual(newCoords, actualCoords)) {
        this.props.checkWeather(newCoords);
      }
    }
  }),
  branch(
    ({ forecast: { forecastData, failure }, mapConfig }) =>
      !forecastData
      && !failure
      && !mapConfig.failure,
    renderComponent(Loader)
  ),
  branch(
    ({ mapConfig, forecast }) => mapConfig.failure || forecast.failure,
    renderComponent(ErrorScreen)
  )
);
