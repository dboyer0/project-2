import { savePoll } from "../utils/api";
import { addPollToUser } from "./users";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL = "ADD_POLL";

export const receivePolls = (polls) => {
    return {
        type: RECEIVE_POLLS,
        polls        
    };
}

export const addPoll = (poll) => {
    return {
        type: ADD_POLL,
        poll
    };
}

export const handleAddPoll = (option1, option2) => {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return savePoll({
            optionOneText: option1,
            optionTwoText: option2,
            author: authedUser
        })
            .then(poll => dispatch(addPoll(poll)))
            .then(poll => dispatch(addPollToUser(poll)));
    }
}