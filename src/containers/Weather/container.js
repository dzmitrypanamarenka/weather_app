import { connect } from 'react-redux';

import { receiveForecastAsync } from '../../redux/actions';

const mapStateToProps = ({ mapConfig, forecast }) => ({
  mapConfig,
  forecast,
});

export default connect(
  mapStateToProps,
  { receiveForecastAsync }
);
