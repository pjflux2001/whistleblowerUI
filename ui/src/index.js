import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Comments from "./Comments";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact path="/whistleblowerUI" component={App} />
      <Route exact path="/login" component={Login} />
      <Route path="/whistleblowerUI/comments/:id" component={Comments} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
