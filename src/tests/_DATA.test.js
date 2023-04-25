import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA.js";

describe("_getUsers", () => {
  it("will return the correct number of users", async () => {
    const result = await _getUsers();
    expect(result).not.toBeNull;
    expect(Object.keys(result).length).toEqual(4);
  });
});

describe("_getQuestions", () => {
  it("will return the correct number of questions", async () => {
    const result = await _getQuestions();
    expect(result).not.toBeNull;
    expect(Object.keys(result).length).toEqual(6);
  });
});

describe("_saveQuestion", () => {
  it("will return the saved question with all expected fields populated", async () => {
    const question = {
      author: "sarahedo",
      optionOneText: "Option One Test",
      optionTwoText: "Option Two Test",
    };
    const result = await _saveQuestion(question);
    expect(result.id).not.toBeNull();
    expect(result.author).toBe(question.author);
    expect(result.timestamp).not.toBeNull();
    expect(result.optionOne.text).toBe(question.optionOneText);
    expect(result.optionTwo.text).toBe(question.optionTwoText);
    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionTwo.votes).toEqual([]);
  });

  it("will return an error if incorrect data is passed to the function", async () => {
    const question = {
      author: null,
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return true when valid data is passed to the function", async () => {
    const questionAnswer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionTwo",
    };
    await expect(_saveQuestionAnswer(questionAnswer)).resolves.toBe(true);
  });

  it("will return an error if incorrect data is passed to the function", async () => {
    const questionAnswer = {
      qid: null,
      answer: "option2",
    };
    await expect(_saveQuestionAnswer(questionAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});