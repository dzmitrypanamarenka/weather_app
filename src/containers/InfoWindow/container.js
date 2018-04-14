import { connect } from 'react-redux';
import { InfoWindow } from 'google-maps-react';

import { mapActions } from '../../redux/actions';

const mapStateToProps = ({ mapInfo: { marker, visible } }) => ({
  marker,
  visible,
});

export default connect(mapStateToProps, mapActions);
