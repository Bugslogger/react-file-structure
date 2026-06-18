import React, { memo } from "react";

const LineChart = ({ labels, values, className = "" }) => {
  const max = Math.max(...values, 1);
  const width = 700;
  const height = 220;
  const leftPad = 36;
  const rightPad = 12;
  const topPad = 18;
  const bottomPad = 42;
  const plotWidth = width - leftPad - rightPad;
  const plotHeight = height - topPad - bottomPad;
  const step = plotWidth / Math.max(values.length - 1, 1);

  const points = values.map((value, index) => {
    const x = leftPad + index * step;
    const y = topPad + plotHeight - (value / max) * plotHeight;
    return { x, y };
  });

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

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

        <path
          d={path}
          fill="none"
          stroke="var(--dashboard-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((point, index) => (
          <circle
            key={`${labels[index]}-${index}`}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="var(--dashboard-accent)"
          />
        ))}

        {labels.map((label, index) => {
          const x = leftPad + index * step;
          return (
            <text
              key={`${label}-${index}`}
              x={x}
              y={height - 12}
              textAnchor="middle"
              fontSize="12"
              fill="rgba(107, 114, 128, 0.95)"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default memo(LineChart);
