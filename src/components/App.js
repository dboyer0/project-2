import { Fragment, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";

const App = ({ dispatch, authedUser }) => {

  useEffect(() => {
    dispatch(handleInitialData());
    // eslint-disable-next-line
  }, []);

  console.log("Authed User: ", authedUser);

  return (
    <Fragment>
      <Nav />
      <div className="container">
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/"
            exact
            element={<Dashboard />}
          />

          <Route
            path="/leaderboard"
            element={<Leaderboard />}
          />
        </Routes>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);