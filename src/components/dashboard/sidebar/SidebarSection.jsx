import React, { memo } from "react";
import SidebarNavItem from "./SidebarNavItem";

const SidebarSection = ({ section, onNavigate }) => {
  return (
    <div className="space-y-2">
      {section.title ? (
        <div className="dashboard-fs-12 dashboard-fw-700 px-4 pt-3 uppercase tracking-wide text-[color:var(--dashboard-muted)]">
          {section.title}
        </div>
      ) : null}
      <div className="space-y-1">
        {section.items.map((item) => (
          <SidebarNavItem key={item.id} item={item} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
};

export default memo(SidebarSection);
