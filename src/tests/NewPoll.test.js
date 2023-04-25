import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import middleware from "../middleware";
import reducer from "../reducers";
import NewPoll from "../components/NewPoll";

const store = createStore(reducer, middleware);

describe("NewPoll", () => {
  let component;
  let inputOption1;
  let inputOption2;
  let submitButton;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Router>
          <NewPoll />
        </Router>
      </Provider>
    );

    inputOption1 = component.getByTestId("option1-input");
    inputOption2 = component.getByTestId("option2-input");
    submitButton = component.getByTestId("submit-button");
  })

  it("matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("will enable the submit button when both options are available", async () => {
    fireEvent.change(inputOption1, { target: { value: "option one test" } });
    fireEvent.change(inputOption2, { target: { value: "option two test" } });

    expect(submitButton).toBeEnabled();
  });

  it('will disable the submit button when one of the options are not available', () => {
    fireEvent.change(inputOption1, { target: { value: "option one test" } });
    fireEvent.change(inputOption2, { target: { value: "" } });

    expect(submitButton).toBeDisabled();
  });

});