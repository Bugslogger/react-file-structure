import React, { Suspense } from "react";
import { useRoutes } from "react-router";
import { routeConfig } from "./routes";

const AppRouter = () => {
  const r = useRoutes(routeConfig);
  return (
      <Suspense
        fallback={<div className="p-4 text-sm text-gray-500">Loading...</div>}
      >
        {r}
      </Suspense>
  );
};

export default AppRouter;
