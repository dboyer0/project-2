import { savePoll, savePollAnswer } from "../utils/api";
import { addPollToUser, addAnswerToUser } from "./users";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL = "ADD_POLL";
export const ADD_ANSWER = "ADD_ANSWER";

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

export const addAnswer = ({ qid, answer, authedUser }) => {
    return {
      type: ADD_ANSWER,
      qid,
      answer,
      authedUser,
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

export const handleAddAnswer = (qid, answer) => {
    return (dispatch, getState) => {
      const { authedUser } = getState();
  
      return savePollAnswer({
        qid,
        answer,
        authedUser,
      })
        .then(() =>
          dispatch(
            addAnswer({
              qid,
              answer,
              authedUser,
            })
          )
        )
        .then(() => dispatch(addAnswerToUser({ qid, answer, authedUser })))
    };
}