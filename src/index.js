import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import App from "./app";
import store from "./redux/store";
import "./style/index.css";
import "./style/dashboard.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = createRoot(document.getElementById("nissi"));

// Create a client
const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>,
);
