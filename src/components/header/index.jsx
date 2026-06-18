import React, { memo } from "react";
import DashboardTopbar from "../dashboard/topbar/DashboardTopbar";

const Header = ({ handleOpen }) => {
  return <DashboardTopbar onOpenMenu={handleOpen} />;
};

export default memo(Header);
