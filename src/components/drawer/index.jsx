import React, { memo } from "react";
import DashboardSidebar from "../dashboard/sidebar/DashboardSidebar";

const Drawer = ({ handleClose, isMobile }) => {
  return <DashboardSidebar isMobile={isMobile} onClose={handleClose} />;
};

export default memo(Drawer);
