import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./styles";
import { Provider } from "react-redux";
import store from "./state/store";
import Home from "./components/home";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
