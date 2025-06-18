import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuItems = ({ items, className, activeClass, onClick, iconClass }) => {
  const location = useLocation();

  useEffect(() => {
    if (items?.isLink) {
      if (!items.url) {
        throw new Error(
          "MenuItem component has isLink `true` but you forgot to pass url."
        );
      }
    }

    if (items?.isImage) {
      if (!items?.image) {
        throw new Error(
          "MenuItem component has isImage `true` but you forgot to pass image."
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
      {items?.isImage ? (
        <img
          src={location.pathname == items.url ? items.activeImage : items.image}
          alt={items?.label || "image"}
          className={iconClass ? iconClass : "w-6"}
        />
      ) : (
        <div>{items.icon}</div>
      )}
      <div className="text-base font-medium">{items.label}</div>
    </NavLink>
  ) : (
    <div
      onClick={onClick}
      className={`flex w-full py-2 px-3 cursor-pointer justify-start items-center gap-2 ${className}`}
    >
      {items?.isImage ? (
        <img
          src={location.pathname == items.url ? items.activeImage : items.image}
          alt={items?.label || "image"}
          className={iconClass ? iconClass : "w-6"}
        />
      ) : (
        <div>{items.icon}</div>
      )}
      <div className="text-base text-inherit font-medium">{items.label}</div>
    </div>
  );
};

export default MenuItems;
