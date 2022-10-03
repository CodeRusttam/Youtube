import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.scss";
import { Provider } from "react-redux";
import 'react-lazy-load-image-component/src/effects/blur.css'
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
