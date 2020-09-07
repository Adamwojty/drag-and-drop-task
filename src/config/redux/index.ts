import { createStore, combineReducers, compose } from "redux";
import { reducer } from "./reducers";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ reducer });

const Store = createStore(rootReducer, composeEnhancers());

export default Store;
