import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./Reducers";
// sfdgdsfgdsfgdgfsf sdfsdfsd
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
export default store;
