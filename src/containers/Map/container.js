import { connect } from 'react-redux';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { compose, withHandlers, renameProp } from 'recompose';

import { renewMapInfo } from '../../redux/actions';

const mapStateToProps = ({ mapConfig: { coords, zoom }, mapInfo: { visibility } }) => ({
  zoom,
  visibility,
  coords,
});

export default compose(
  connect(
    mapStateToProps,
    {
      renewMapInfo,
    }
  ),
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_APIKEY,
  }),
  renameProp('coords', 'center'),
  withHandlers({
    onClick: ({ visibility, renewMapInfo }) => () => (
      visibility
        ? renewMapInfo({ visibility: false })
        : null
    ),
  })
)(Map);
