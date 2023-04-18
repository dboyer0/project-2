import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA.js";

export const getInitialData = () => {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, polls]) => ({
    users,
    polls,
  }));
}

export const savePoll = (poll) => {
  return _saveQuestion(poll);
}

export const savePollAnswer = (answer) => {
  return _saveQuestionAnswer(answer);
}