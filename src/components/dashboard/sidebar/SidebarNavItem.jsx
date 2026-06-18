import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { resolveIcon } from "../iconMap";

const SidebarNavItem = ({ item, onNavigate }) => {
  const Icon = resolveIcon(item.icon);

  return (
    <NavLink
      to={item.href}
      onClick={onNavigate}
      style={({ isActive }) =>
        isActive || item.active ? { boxShadow: "none" } : undefined
      }
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3 py-3 dashboard-fs-14 dashboard-fw-600 transition-all ${
          isActive || item.active ? "dashboard-active-item" : "text-[color:var(--dashboard-muted)] hover:bg-[rgba(17,24,39,0.04)] hover:text-[color:var(--dashboard-text)]"
        }`
      }
    >
      <Icon className="shrink-0 text-base" />
      <span>{item.label}</span>
    </NavLink>
  );
};

export default memo(SidebarNavItem);
