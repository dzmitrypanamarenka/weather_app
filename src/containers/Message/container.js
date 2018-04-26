import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';

import store from '../../redux/store';
import Message from '../../components/Message';

const mapStateToProps = ({ message: { message } }) => ({
  message,
});

export default compose(
  withProps({ store }),
  connect(mapStateToProps),
)(Message);
