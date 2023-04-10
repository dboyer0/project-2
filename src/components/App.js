import { Fragment } from "react";
import {Route, Routes} from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";

const App = () => {
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

export default App;
