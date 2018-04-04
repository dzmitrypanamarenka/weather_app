import { connect } from 'react-redux';
import { InfoWindow } from 'google-maps-react';

const mapStateToProps = (state) => ({
  marker: state.info.marker,
  visible: state.info.visibility
});

export default connect(
    mapStateToProps
)(InfoWindow);