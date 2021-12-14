import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
