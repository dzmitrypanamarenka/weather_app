import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import {
  mapActions,
  displayMessageAction
} from '../../redux/actions';
import messages from './config';

const { receiveMapCoordsAsync } = mapActions;
const mapStateToProps = ({ mapInfo, message: { message } }) => ({
  message,
  mapInfo
});

export default compose(
  connect(
    mapStateToProps,
    {
      receiveMapCoordsAsync,
      displayMessageAction,
    }
  ),
  lifecycle({
    componentDidMount () {
      this.props.displayMessageAction(messages.default);
      this.props.receiveMapCoordsAsync();
    }
  }),
);

