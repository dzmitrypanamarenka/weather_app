import { connect } from 'react-redux';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { compose, withHandlers, renameProp } from 'recompose';

import { renewMapInfo } from '../../redux/actions';

const mapStateToProps = ({ mapConfig: { coords, zoom }, mapInfo: { visibility } }) => ({
  zoom,
  visibility,
  coords,
});

export const withConnect = connect(
  mapStateToProps,
  {
    renewMapInfo,
  }
);
export const withGoogleMapApi = GoogleApiWrapper({
  apiKey: process.env.APIKEY,
});
export const withBindings = withHandlers({
  onClick: ({ visibility, renewMapInfo }) => () => (
    visibility
      ? renewMapInfo({ visibility: false })
      : null
  ),
});
export const withRename = renameProp('coords', 'center');
export default compose(
  withConnect,
  withGoogleMapApi,
  withRename,
  withBindings
)(Map);
