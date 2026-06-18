import React, { memo } from "react";

const TopbarIconButton = ({ Icon, children, className = "", onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl border border-[color:var(--dashboard-border)] bg-[color:var(--dashboard-surface)] px-3 py-2 text-sm font-medium text-[color:var(--dashboard-text)] transition hover:bg-[color:var(--dashboard-surface-soft)] ${className}`}
    >
      <Icon className="text-sm" />
      {children}
    </button>
  );
};

export default memo(TopbarIconButton);
