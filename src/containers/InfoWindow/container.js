import { connect } from 'react-redux';
import { InfoWindow } from 'google-maps-react';
import { compose, renameProp } from 'recompose';

import { mapActions } from '../../redux/actions';

const mapStateToProps = ({ mapInfo: { marker, visibility } }) => ({
  marker,
  visibility,
});

export const withConnect = connect(mapStateToProps, mapActions);
export const withRename = renameProp('visibility', 'visible');
export default compose(
  withConnect,
  withRename,
)(InfoWindow);
