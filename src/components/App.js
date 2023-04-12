import { Fragment, useEffect } from "react";
import {Route, Routes, useLocation, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";

// if authedUser = true, show components, else redirect to login
const RequireAuth = ({ children, authedUser }) => {
  const location = useLocation();

  return authedUser ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />
}

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
            element={
              <RequireAuth authedUser={authedUser}>
                <Dashboard />
              </RequireAuth>
            }
          />

          <Route
            path="/leaderboard"
            element={
              <RequireAuth authedUser={authedUser}>
                <Leaderboard />
              </RequireAuth>              
            }
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