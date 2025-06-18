import React from "react";
import { MdDashboard } from "react-icons/md";
import { ICONS_SIZE } from "../../utils/constant";

export const menuItems = [
  {
    label: "Dashboard",
    url: "/",
    isLink: false,
    icon: <MdDashboard fontSize={`${ICONS_SIZE}px`} />,
    isImage: false,
    image: "",
    activeImage: "",
  },
  {
    label: "Profile",
    url: "/profile",
    isLink: true,
    isImage: true,
    image: "https://freesvg.org/img/abstract-user-flat-3.png",
    activeImage:
      "https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg",
  },
];
