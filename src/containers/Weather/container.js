import { connect } from 'react-redux';
import _ from 'lodash';
import {
  compose,
  lifecycle,
  withHandlers,
  branch,
  renderComponent,
} from 'recompose';

import ErrorScreen from '../../components/ErrorScreen';
import Loader from '../../components/Loader';
import {
  mapActions,
  forecastActions,
  displayMessageAction,
} from '../../redux/actions';

const { receiveForecastAsync } = forecastActions;
const { receiveMapCoordsAsync } = mapActions;

const mapStateToProps = ({ mapConfig, forecast }) => ({
  mapConfig,
  forecast,
});

export const withConnect = connect(
  mapStateToProps,
  {
    receiveForecastAsync,
    receiveMapCoordsAsync,
    displayMessageAction,
  }
);
export const withBindings = withHandlers({
  checkWeather: ({ receiveForecastAsync }) => coords => receiveForecastAsync(coords),
});
export const withLifecycle = lifecycle({
  componentDidMount () {
    this.props.displayMessageAction('');
    this.props.receiveMapCoordsAsync();
    const { coords } = this.props.mapConfig;
    if (coords) {
      this.props.checkWeather(coords);
    }
  },
  componentDidUpdate (prevProps) {
    const newCoords = this.props.mapConfig.coords;
    const actualCoords = prevProps.mapConfig.coords;

    if (!_.isEqual(newCoords, actualCoords)) {
      this.props.checkWeather(newCoords);
    }
  },
});
export const withLoader = branch(
  ({ forecast: { forecastData, failure }, mapConfig }) =>
    !forecastData
    && !failure
    && !mapConfig.failure,
  renderComponent(Loader)
);
export const withErrorScreen = branch(
  ({ mapConfig, forecast }) => mapConfig.failure || forecast.failure,
  renderComponent(ErrorScreen)
);
export default compose(
  withConnect,
  withBindings,
  withLifecycle,
  withLoader,
  withErrorScreen,
);
