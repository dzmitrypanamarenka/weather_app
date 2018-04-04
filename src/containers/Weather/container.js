import {connect} from 'react-redux';
import { receiveForecastAsync } from '../../redux/actions';

const mapStateToProps = (state) => ({
  options: state.options,
  forecast: state.forecast
});

export default connect(
  mapStateToProps,
  { receiveForecastAsync }
);