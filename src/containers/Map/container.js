import { connect } from 'react-redux';
import { mapActions } from '../../redux/actions';
import { GoogleApiWrapper } from 'google-maps-react';
import { Map } from 'google-maps-react';

const mapStateToProps = (state) => ({
  center: state.options.coords,
  zoom: state.options.zoom,
  onClick: state.options.events.mapOnClick
});
const wrappedMap = GoogleApiWrapper({
  apiKey: 'AIzaSyACAE6XG5h9iiz4Mh_wprcO7eaSWHzfjAA'
})(Map);

export default connect(
    mapStateToProps,
    mapActions
)(wrappedMap);