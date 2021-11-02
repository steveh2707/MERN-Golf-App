import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import roundReducer from "./roundReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  round: roundReducer,
  course: courseReducer,
  auth: authReducer,
  error: errorReducer,
});
