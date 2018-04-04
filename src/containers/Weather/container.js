import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import { Weather } from '../../components/Weather';

console.log(Weather)

const mapStateToProps = (state) => ({
  options: state.options,
  forecast: state.forecast
});

export default connect(
    mapStateToProps,
    actions
)(Weather);