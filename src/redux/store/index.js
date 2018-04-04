import reducers from "../reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);