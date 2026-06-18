import React, { useCallback, useState } from "react";
import Drawer from "../drawer";
import Header from "../header";
import ModelWrapper from "./modelWrapper";
import { DASHBOARD_THEME } from "../../utils/dashboard.config";

const LayoutWrapper = ({ children }) => {
  const [close, setclose] = useState(false);

  const handleClose = useCallback(() => {
    setclose(false);
  }, []);

  const handleOpen = useCallback(() => {
    setclose(true);
  }, []);

  return (
    <div
      className="dashboard-shell flex h-screen w-full gap-4 overflow-hidden p-4"
      style={DASHBOARD_THEME.cssVars}
    >
      <div className="hidden h-full lg:block">
        <Drawer />
      </div>
      <ModelWrapper
        className="lg:hidden block"
        open={close}
        handleClose={handleClose}
      >
        <Drawer isMobile handleClose={handleClose} className="bg-white px-1" />
      </ModelWrapper>
      <div className="flex h-full w-full min-w-0 flex-col overflow-hidden">
        <Header handleOpen={handleOpen} />
        <main className="min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-4 lg:px-6 lg:pt-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
