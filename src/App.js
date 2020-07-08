import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import LoginForm from "./components/Loginform";
import Signup from "./Signup";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Nav />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/login" render={() => <LoginForm />} />
          <Route path="/signup" render={() => <Signup />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
