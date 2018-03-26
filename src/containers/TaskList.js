import { connect } from 'react-redux';
import ToDoForm from '../components/TaskList';
import * as actions from '../actions/';
import { withRouter } from 'react-router';

const mapStateToProps = (state, { match: { params: { filter } } }) => {
  return {
    todos: Object.values(state.todos),
    filter: filter ? filter : 'all'
  }
};

export default withRouter(connect(
    mapStateToProps,
    actions
)(ToDoForm));