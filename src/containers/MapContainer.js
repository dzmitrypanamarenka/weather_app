import { connect } from 'react-redux';
import * as actions from '../actions/';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from '../components/MapContainer'

const mapStateToProps = (state) => ({
    options: state.options
});

export default connect(
    mapStateToProps,
    actions
)(MapContainer);