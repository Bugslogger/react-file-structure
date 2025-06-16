import React, { memo } from "react";
import { IoMdClose } from "react-icons/io";

import "../../style/drawer.css";
import MenuItems from "./menuItems";
import { menuItems } from "./constant";
import { ICONS_SIZE } from "../../utils/constant";

const Drawer = ({ className, handleClose, isMobile }) => {
  return (
    <div className={`drawer-width h-full ${className}`}>
      {/* logo */}
      {isMobile ? (
        <div
          className="py-2 flex justify-end items-center cursor-pointer px-1"
          onClick={handleClose}
        >
          <IoMdClose fontSize={`${ICONS_SIZE}px`} className="text-red-600 font-semibold" />
        </div>
      ) : (
        <div className="h-20">place your logo here</div>
      )}

      {/* sidebar menu items */}
      <div
        className={`w-full ${
          isMobile ? "h-full py-2" : "h-[calc(100%_-_92px)]  mt-3"
        } overflow-auto flex justify-start items-center gap-1 flex-col`}
      >
        {menuItems.map((v) => (
          <MenuItems
            onClick={handleClose}
            items={v}
            className="border border-gray-300"
            activeClass="bg-red-600 text-white"
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Drawer);
