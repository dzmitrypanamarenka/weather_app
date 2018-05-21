import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';

import store from '../../redux/store';
import Message from '../../components/Message';

const mapStateToProps = ({ message }) => ({
  ...message,
});

export const withConnect = connect(mapStateToProps);
export const withSettedProps = withProps({ store });
export default compose(
  withSettedProps,
  withConnect,
)(Message);
