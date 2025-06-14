import React from "react";
import { useRoutes } from "react-router";
import { routeConfig } from "./routes";

const AppRouter = () => {
  const r = useRoutes([routeConfig]);
  return r;
};

export default AppRouter;
