import React, { memo } from "react";

const BarChart = ({ labels, values, className = "" }) => {
  const max = Math.max(...values, 1);
  const width = 700;
  const height = 220;
  const leftPad = 36;
  const rightPad = 12;
  const topPad = 18;
  const bottomPad = 40;
  const plotWidth = width - leftPad - rightPad;
  const plotHeight = height - topPad - bottomPad;
  const gap = 14;
  const barWidth = Math.max((plotWidth - gap * (values.length - 1)) / values.length, 14);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[220px] w-full">
        {[0, 0.25, 0.5, 0.75, 1].map((tick, index) => {
          const y = topPad + plotHeight - plotHeight * tick;
          return (
            <g key={index}>
              <line
                x1={leftPad}
                x2={width - rightPad}
                y1={y}
                y2={y}
                stroke="rgba(148, 163, 184, 0.25)"
              />
              <text
                x={leftPad - 10}
                y={y + 4}
                textAnchor="end"
                fontSize="12"
                fill="rgba(107, 114, 128, 0.9)"
              >
                {Math.round(max * tick)}
              </text>
            </g>
          );
        })}

        {values.map((value, index) => {
          const x = leftPad + index * (barWidth + gap);
          const barHeight = (value / max) * plotHeight;
          const y = topPad + plotHeight - barHeight;
          const labelX = x + barWidth / 2;
          return (
            <g key={`${labels[index]}-${index}`}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="6"
                fill="var(--dashboard-accent)"
              />
              <text
                x={labelX}
                y={height - 12}
                textAnchor="middle"
                fontSize="12"
                fill="rgba(107, 114, 128, 0.95)"
              >
                {labels[index]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default memo(BarChart);
