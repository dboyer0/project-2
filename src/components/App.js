import { Fragment } from "react";
import {Route, Routes} from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";

const App = () => {
  return (
    <Fragment>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
