import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import { createTodo } from "./actions";
import store from "./reducers";

store.dispatch(createTodo({ todo: "learn react" }));
store.dispatch(createTodo({ todo: "learn redux" }));
store.dispatch(createTodo({ todo: "learn hooks" }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
