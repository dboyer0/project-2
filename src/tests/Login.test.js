import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import middleware from "../middleware";
import reducer from "../reducers";
import Login from "../components/Login";

const store = createStore(reducer, middleware);

describe("Login", () => {
  let component;
  let inputUserName;
  let inputPassword;
  let loginButton;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    inputUserName= component.getByTestId("username-input");
    inputPassword = component.getByTestId("password-input");
    loginButton = component.getByTestId("login-button");
  })

  it("displays a username and password field along with a disabled login button", () => {
    expect(inputUserName).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();
  });

  it("displays an enabled login button if both username and password are entered", () => {
    fireEvent.change(inputUserName, { target: { value: "tylermcginnis" } });
    fireEvent.change(inputPassword, { target: { value: "abc321" } });
    expect(loginButton).toBeEnabled();
  });

  it("displays disabled login button if username or password fields are not filled in", () => {
    fireEvent.change(inputUserName, { target: { value: "" } });
    fireEvent.change(inputPassword, { target: { value: "" } });
    expect(loginButton).toBeDisabled();
  });

});