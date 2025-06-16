import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const MenuItems = ({ items, className, activeClass, onClick }) => {
  useEffect(() => {
    if (items.isLink) {
      if (!items.url) {
        throw new Error(
          "MenuItem component has isLink `true` but you forgot to pass url."
        );
      }
    }
  }, []);

  return items.isLink ? (
    <NavLink
      onClick={onClick}
      to={items.url}
      className={({ isActive }) =>
        `${
          isActive ? activeClass : ""
        } flex w-full py-2 px-3 cursor-pointer justify-start items-center gap-2 ${className}`
      }
    >
      {items.icon ? <div>{items.icon}</div> : <></>}
      <div className="text-base font-medium">{items.label}</div>
    </NavLink>
  ) : (
    <div
      onClick={onClick}
      className={`flex w-full py-2 px-3 cursor-pointer justify-start items-center gap-2 ${className}`}
    >
      {items.icon ? <div className="text-inherit">{items.icon}</div> : <></>}
      <div className="text-base text-inherit font-medium">{items.label}</div>
    </div>
  );
};

export default MenuItems;
