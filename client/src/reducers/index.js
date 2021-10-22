import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import roundReducer from "./roundReducer";


export default combineReducers({
    round: roundReducer,
    course: courseReducer
})