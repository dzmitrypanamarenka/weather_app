import { connect } from 'react-redux';

import { mapActions, forecastActions } from '../../redux/actions';

const { receiveForecastAsync } = forecastActions;
const { receiveMapCoordsAsync } = mapActions;

const mapStateToProps = ({ mapConfig, forecast }) => ({
  mapConfig,
  forecast,
});

export default connect(
  mapStateToProps,
  {
    receiveForecastAsync,
    receiveMapCoordsAsync,
  }
);
