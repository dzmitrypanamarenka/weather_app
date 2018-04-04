import { connect } from 'react-redux';
import { mapActions } from '../../redux/actions';

const mapStateToProps = (state) => ({
  options: state.options,
  info: state.info
});

export default connect(
    mapStateToProps,
    mapActions
);

