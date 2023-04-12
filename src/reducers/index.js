import { combineReducers } from "redux";
import tests from "./tests";
import authedUser from "./authedUser";
import users from "./users";
import polls from "./polls";

export default combineReducers({
    tests,
    authedUser,
    users,
    polls
});