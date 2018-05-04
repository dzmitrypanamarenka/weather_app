import { connect } from 'react-redux';
import { Marker } from 'google-maps-react';
import { compose, withHandlers, renameProp } from 'recompose';

import { renewMapInfo } from '../../redux/actions';

const mapStateToProps = ({ mapConfig: { coords } }) => ({
  coords,
});

export const withConnect = connect(
  mapStateToProps,
  {
    renewMapInfo,
  }
);
export const withRename = renameProp('coords', 'position');
export const withBindings = withHandlers({
  onClick: ({ renewMapInfo }) => (event, marker) => (
    renewMapInfo({ visibility: true, marker })
  ),
});
export default compose(
  withConnect,
  withRename,
  withBindings,
)(Marker);
