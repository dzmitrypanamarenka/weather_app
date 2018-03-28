import { connect } from 'react-redux';
import * as actions from '../actions/';
import App from '../components/App';

const mapStateToProps = (state) => ({
  options: state.options
});

export default connect(
    mapStateToProps,
    actions
)(App);