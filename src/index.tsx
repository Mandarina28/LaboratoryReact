import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./ejercicios/ejercicio1/app";
import { App as App2 } from "./ejercicios/ejercicio2/app";
import { App as App3 } from "./ejercicios/ejercicio3/app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>,
);
