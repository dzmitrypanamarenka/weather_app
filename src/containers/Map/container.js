import { connect } from 'react-redux';
import { GoogleApiWrapper, Map } from 'google-maps-react';

import { mapActions } from '../../redux/actions';

const mapStateToProps = ({ mapConfig: { coords, zoom, events: { mapOnClick } } }) => ({
  zoom,
  center: coords,
  onClick: mapOnClick,
});
const wrappedMap = GoogleApiWrapper({
  apiKey: 'AIzaSyACAE6XG5h9iiz4Mh_wprcO7eaSWHzfjAA',
})(Map);

export default connect(
  mapStateToProps,
  mapActions
)(wrappedMap);
