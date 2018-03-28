import { connect } from 'react-redux';
import * as actions from '../actions/';
import { Marker } from 'google-maps-react';

const mapStateToProps = (state) => ({
  name: 'Your position',
  position: state.options.coords,
  onClick: state.options.events.markerOnClick
});

export default connect(
    mapStateToProps,
    actions
)(Marker);