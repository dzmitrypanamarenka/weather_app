import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions/';

const options = handleActions({
  [actions.updateMap](state, { payload: { coords }}) {
    console.log(coords)
    return { ...state, coords };
  },
  // [actions.removeTask](state, { payload: { id } }){
  //   return _.omit(state, id);
  // },
  // [actions.changeStatus](state, { payload: { id } }){
  //   const newStatus = state[id].status === 'active' ? 'done' : 'active';
  //   const task = { ...state[id], status: newStatus };
  //   return { ...state, [id]: task};
  // }
}, {coords: {
    lat: 40.854885,
    lng: -88.081807
  }, zoom: 7 });

export default combineReducers({
  options
})
