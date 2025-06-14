import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";
import "./style/index.css";

const root = createRoot(document.getElementById("nissi"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
