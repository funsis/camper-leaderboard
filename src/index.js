import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from "redux-promise";
import reducers from "./reducers/index";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
