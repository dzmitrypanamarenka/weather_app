import { connect } from 'react-redux';
import { Marker } from 'google-maps-react';
import { compose, withHandlers, renameProp } from 'recompose';

import { renewMapInfo } from '../../redux/actions';

const mapStateToProps = ({ mapConfig: { coords } }) => ({
  coords,
});

export default compose(
  connect(
    mapStateToProps,
    {
      renewMapInfo,
    }
  ),
  renameProp('coords', 'position'),
  withHandlers({
    onClick: ({ renewMapInfo }) => (event, marker) => (
      renewMapInfo({ visibility: true, marker })
    ),
  }),
)(Marker);
