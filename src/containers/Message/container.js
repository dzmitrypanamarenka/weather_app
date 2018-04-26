import { connect } from 'react-redux';

import { mapActions } from '../../redux/actions';

const mapStateToProps = ({ mapConfig }) => ({
  mapConfig,
});

export default connect(
  mapStateToProps,
  mapActions
);
