import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./Reducers";
// sfdgdsfgdsfgdgfsf sdfsdfsd
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
