import React, { memo } from "react";
import StatsGrid from "./stats/StatsGrid";
import ChartsGrid from "./charts/ChartsGrid";
import ProjectsCard from "./projects/ProjectsCard";
import OrdersCard from "./orders/OrdersCard";

const DashboardContent = () => {
  return (
    <div className="space-y-6">
      <section className="space-y-1">
        <h1 className="dashboard-fs-24 dashboard-fw-700 dashboard-leading-tight tracking-tight text-[color:var(--dashboard-text)]">
          Dashboard
        </h1>
        <p className="dashboard-fs-14 dashboard-leading-relaxed text-[color:var(--dashboard-muted)]">
          Check the sales, value and bounce rate by country.
        </p>
      </section>

      <StatsGrid />
      <ChartsGrid />

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <ProjectsCard />
        <OrdersCard />
      </div>
    </div>
  );
};

export default memo(DashboardContent);
