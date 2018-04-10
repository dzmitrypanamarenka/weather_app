import { connect } from 'react-redux';

import { mapActions } from '../../redux/actions';

const mapStateToProps = ({ mapConfig, mapInfo }) => ({
  mapConfig,
  mapInfo,
});

export default connect(
  mapStateToProps,
  mapActions
);

