import { combineReducers } from "redux";
import lists from "./todo";

const rootReducer = combineReducers({
  lists
});

export default rootReducer;
