import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { spy } from "mobx";
import App from "./App";

spy((ev) => {
  if (ev.type === "action") {
    console.log(ev);
  }
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
