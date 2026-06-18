import React, { memo } from "react";

const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <h2 className="dashboard-fs-16 dashboard-fw-700 dashboard-leading-tight text-[color:var(--dashboard-text)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="dashboard-fs-14 dashboard-leading-relaxed text-[color:var(--dashboard-muted)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};

export default memo(SectionHeader);
