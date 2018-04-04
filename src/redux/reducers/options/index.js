import {handleActions} from "redux-actions";
import { mapActions } from "../../actions";

export default handleActions({
  [mapActions.updateMapCoords](state, { payload: { coords } }) {
    return { ...state, coords };
  },
  [mapActions.bindMapEvents](state, { payload: { events } }) {
    return { ...state, events }
  }
}, { zoom: 16, events: {} });