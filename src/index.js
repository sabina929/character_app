import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CharacterProvider } from "./context";

ReactDOM.render(
  <CharacterProvider>
  <App />
  </CharacterProvider>, document.getElementById("root"));
