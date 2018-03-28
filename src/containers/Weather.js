import { connect } from 'react-redux';
import * as actions from '../actions/';
import Weather from '../components/Weather';

const mapStateToProps = (state) => ({
  options: state.options,
  forecast: state.forecast
});

export default connect(
    mapStateToProps,
    actions
)(Weather);