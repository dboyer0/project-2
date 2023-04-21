import { Fragment, useEffect } from "react";
import {Route, Routes, useLocation, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import PollPage from "./PollPage";
import NotFound from "./NotFound";

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
            exact
            element={
              <RequireAuth authedUser={authedUser}>
                <Leaderboard />
              </RequireAuth>              
            }
          />

          <Route
            path="/add"
            exact
            element={
              <RequireAuth authedUser={authedUser}>
                <NewPoll />
              </RequireAuth>              
            }
          />

          <Route
            path="/question/:id"
            element={
              <RequireAuth authedUser={authedUser}>
                <PollPage />
              </RequireAuth>              
            }
          />

          <Route
            path="*"
            element={<NotFound />}
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