import React, { memo } from "react";
import SurfaceCard from "../shared/SurfaceCard";
import { resolveIcon } from "../iconMap";

const StatCard = ({ stat }) => {
  const Icon = resolveIcon(stat.icon);
  const isUp = stat.deltaTone === "up";

  return (
    <SurfaceCard className="relative overflow-hidden px-4 py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="dashboard-fs-14 text-[color:var(--dashboard-muted)]">
            {stat.title}
          </p>
          <div className="dashboard-fs-24 dashboard-fw-700 dashboard-leading-tight tracking-tight text-[color:var(--dashboard-text)]">
            {stat.value}
          </div>
        </div>
        <div className="flex size-12 items-center justify-center rounded-xl bg-[linear-gradient(180deg,#2c2d33_0%,#202126_100%)] text-white shadow-lg">
          <Icon className="text-lg" />
        </div>
      </div>
      <div className="dashboard-fs-14 mt-4 border-t border-[color:var(--dashboard-border)] pt-3">
        <span
          className={`font-semibold ${
            isUp ? "text-emerald-500" : "text-red-500"
          }`}
        >
          {stat.delta}
        </span>
        <span className="ml-1 text-[color:var(--dashboard-muted)]">
          {stat.deltaLabel}
        </span>
      </div>
    </SurfaceCard>
  );
};

export default memo(StatCard);
