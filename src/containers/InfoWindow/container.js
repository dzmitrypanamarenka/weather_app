import { connect } from 'react-redux';
import { InfoWindow } from 'google-maps-react';

const mapStateToProps = ({ mapInfo: { marker, visible } }) => ({
  marker,
  visible,
});

export default connect(mapStateToProps)(InfoWindow);
