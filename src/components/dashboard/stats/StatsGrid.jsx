import React, { memo } from "react";
import { DASHBOARD_STATS } from "../../../utils/dashboard.config";
import StatCard from "./StatCard";

const StatsGrid = () => {
  return (
    <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-2">
      {DASHBOARD_STATS.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
};

export default memo(StatsGrid);
