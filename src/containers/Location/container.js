import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import {
  mapActions,
  displayMessageAction,
} from '../../redux/actions';
import messages from './config';

const { receiveMapCoordsAsync } = mapActions;
const mapStateToProps = ({ mapInfo, message: { message } }) => ({
  message,
  mapInfo,
});

export const withConnect = connect(
  mapStateToProps,
  {
    receiveMapCoordsAsync,
    displayMessageAction,
  }
);
export const withLifecycle = lifecycle({
  componentDidMount () {
    const { displayMessageAction, receiveMapCoordsAsync } = this.props;
    const { defaultMsg } = messages;
    displayMessageAction(defaultMsg);
    receiveMapCoordsAsync();
  },
});
export default compose(
  withConnect,
  withLifecycle,
);

