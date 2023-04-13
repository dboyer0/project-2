export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_POLL_TO_USER = "ADD_POLL_TO_USER";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export const addPollToUser = ({ poll }) => {
    return {
        type: ADD_POLL_TO_USER,
        poll
    };
}