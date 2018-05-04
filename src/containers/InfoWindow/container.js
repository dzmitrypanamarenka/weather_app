import { connect } from 'react-redux';
import { InfoWindow } from 'google-maps-react';
import { compose, renameProp } from 'recompose';

import { mapActions } from '../../redux/actions';

const mapStateToProps = ({ mapInfo: { marker, visibility } }) => ({
  marker,
  visibility,
});

export default compose(
  connect(mapStateToProps, mapActions),
  renameProp('visibility', 'visible'),
)(InfoWindow);
