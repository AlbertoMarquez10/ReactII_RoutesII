import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { PokeProvider } from "./assets/context/PokeContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokeProvider>
        <App />
      </PokeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
