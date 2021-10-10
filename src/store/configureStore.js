import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const configureStore = () => {
  const middlewares = composeWithDevTools(applyMiddleware(thunkMiddleware));

  return createStore(rootReducer, {}, middlewares);
};

export default configureStore;
