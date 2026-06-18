import React, { memo } from "react";
import ChartShell from "./ChartShell";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const ChartCard = ({ chart }) => {
  return (
    <ChartShell
      title={chart.title}
      subtitle={chart.subtitle}
      footnote={chart.footnote}
    >
      {chart.type === "bar" ? (
        <BarChart labels={chart.labels} values={chart.values} />
      ) : (
        <LineChart labels={chart.labels} values={chart.values} />
      )}
    </ChartShell>
  );
};

export default memo(ChartCard);
