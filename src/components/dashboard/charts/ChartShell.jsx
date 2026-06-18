import React, { memo } from "react";
import SurfaceCard from "../shared/SurfaceCard";

const ChartShell = ({ title, subtitle, footnote, children, className = "" }) => {
  return (
    <SurfaceCard className={`px-4 py-4 ${className}`}>
      <div className="space-y-1">
        <h3 className="dashboard-fs-16 dashboard-fw-700 dashboard-leading-tight text-[color:var(--dashboard-text)]">
          {title}
        </h3>
        <p className="dashboard-fs-14 dashboard-leading-relaxed text-[color:var(--dashboard-muted)]">
          {subtitle}
        </p>
      </div>
      <div className="mt-5">{children}</div>
      <div className="dashboard-fs-14 mt-4 flex items-center gap-2 text-[color:var(--dashboard-muted)]">
        <span className="inline-flex size-4 items-center justify-center rounded-full border border-[color:var(--dashboard-border)] text-[10px]">
          i
        </span>
        <span>{footnote}</span>
      </div>
    </SurfaceCard>
  );
};

export default memo(ChartShell);
