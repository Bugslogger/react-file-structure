import React, { memo } from "react";
import { DASHBOARD_CHARTS } from "../../../utils/dashboard.config";
import ChartCard from "./ChartCard";

const ChartsGrid = () => {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {DASHBOARD_CHARTS.map((chart) => (
        <ChartCard key={chart.id} chart={chart} />
      ))}
    </div>
  );
};

export default memo(ChartsGrid);
