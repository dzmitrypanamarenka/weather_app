import { connect } from 'react-redux';

import { mapActions, infoActions } from '../../redux/actions';

const { receiveMapCoordsAsync } = mapActions;

const mapStateToProps = ({ mapConfig, mapInfo }) => ({
  mapConfig,
  mapInfo,
});

export default connect(
  mapStateToProps,
  {
    receiveMapCoordsAsync,
    ...infoActions,
  }
);

