import { combineReducers } from "redux";
import refresh from "./refreshColors.reducers";
import select from "./selectColors.reducers";

export default combineReducers({
  select,
  refresh,
});
