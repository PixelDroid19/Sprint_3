import React from "react";
import ReactDOM from "react-dom";
import { RegistroApp } from "./RegistroApp";
import { Provider } from "react-redux";
import { store } from "./store/store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './style/style.css'

ReactDOM.render(
  <Provider store={store}>
    <RegistroApp />
  </Provider>,
  document.getElementById("root")
);
