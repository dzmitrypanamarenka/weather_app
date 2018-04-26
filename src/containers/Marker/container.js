import { connect } from 'react-redux';
import { Marker } from 'google-maps-react';

import { infoActions } from '../../redux/actions';

const mapStateToProps = ({ mapConfig: { coords }, mapInfo: { events: { markerOnClick } } }) => ({
  position: coords,
  onClick: markerOnClick,
});

export default connect(
  mapStateToProps,
  infoActions
)(Marker);
