import {handleActions} from "redux-actions";
import { mapActions } from "../../actions/index";

export default handleActions({
  [mapActions.updateMap](state, { payload: { coords } }) {
    return { ...state, coords };
  },
  [mapActions.bindEvents](state, { payload: { events } }) {
    return { ...state, events }
  }
}, { zoom: 16, events: {} });