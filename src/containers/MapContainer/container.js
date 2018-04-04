import { connect } from 'react-redux';
import { mapActions } from '../../redux/actions/index';
import { MapContainer } from '../../components';

console.log(MapContainer)

const mapStateToProps = (state) => ({
  options: state.options,
  info: state.info
});

export default connect(
    mapStateToProps,
  mapActions
)(MapContainer);

