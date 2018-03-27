import { connect } from 'react-redux';
import * as actions from '../actions/';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from '../components/MapContainer';

const mapStateToProps = (state) => ({
  options: state.options,
  info: state.info
});
const wrappedComponent = GoogleApiWrapper({
  apiKey: 'AIzaSyACAE6XG5h9iiz4Mh_wprcO7eaSWHzfjAA'
})(MapContainer);

export default connect(
    mapStateToProps,
    actions
)(wrappedComponent);

