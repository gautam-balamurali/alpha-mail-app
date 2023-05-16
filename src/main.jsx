import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MailboxProvider } from "./core/contexts/MailboxContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MailboxProvider>
        <App />
      </MailboxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
