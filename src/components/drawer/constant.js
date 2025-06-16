import React from "react";
import { MdDashboard } from "react-icons/md";
import { ICONS_SIZE } from "../../utils/constant";

export const menuItems = [
  {
    label: "Dashboard",
    url: "/",
    isLink: false,
    icon: <MdDashboard fontSize={`${ICONS_SIZE}px`} />,
  },
  { label: "About", url: "/about", isLink: true },
];
