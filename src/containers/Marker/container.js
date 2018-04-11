import { connect } from 'react-redux';
import { Marker } from 'google-maps-react';

import { mapActions } from '../../redux/actions';

const mapStateToProps = ({ mapConfig: { coords }, mapInfo: { events: { markerOnClick } } }) => ({
  name: 'Your position',
  position: coords,
  onClick: markerOnClick,
});

export default connect(
  mapStateToProps,
  mapActions
)(Marker);
