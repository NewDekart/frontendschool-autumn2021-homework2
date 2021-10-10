import { combineReducers } from "redux";
import settings from "./settingsReducer";
import historyBuilds from "./historyReducer";

export default combineReducers({
  settings,
  historyBuilds,
});
