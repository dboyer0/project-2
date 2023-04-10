import { combineReducers } from "redux";
import tests from "./tests";
import authedUser from "./authedUser";

export default combineReducers({
    tests,
    authedUser
});