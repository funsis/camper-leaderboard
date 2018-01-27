import { combineReducers } from "redux";
import leadersReducer from "./leaders_reducer";

const rootReducer = combineReducers({
  leaders: leadersReducer
});

export default rootReducer;
