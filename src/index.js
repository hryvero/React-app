import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state from "./state";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let usersItem = [
  { name: "Victor", id: 1 },
  { name: "Anna", id: "2" },
  { name: "Irina", id: "3" },
  { name: "Arina", id: "4" },
];
ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
