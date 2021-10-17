import { combineReducers } from "redux";
import roundReducer from "./roundReducer";
// import {reducer as reduxFormReducer} from "redux-form"


export default combineReducers({
    round: roundReducer,
    // form: reduxFormReducer
})