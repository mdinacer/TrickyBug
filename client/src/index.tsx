import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import { createBrowserHistory } from "history";
import reportWebVitals from "./reportWebVitals";
import { HistoryRouter } from "./app/layout/HistoryRouter";
import "./index.css";
import { store } from "./app/store/configureStore";
import { Provider } from "react-redux";

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <HistoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
