import { connect } from 'react-redux';
import * as actions from '../actions/';
import MapContainer from '../components/MapContainer';

const mapStateToProps = (state) => ({
  options: state.options,
  info: state.info
});

export default connect(
    mapStateToProps,
    actions
)(MapContainer);

