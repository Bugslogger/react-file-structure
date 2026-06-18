import React, { memo } from "react";

const OrderItem = ({ item, isLast }) => {
  return (
    <div className="relative pl-7">
      <span className="absolute left-0 top-1 size-3 rounded-full border-2 border-[color:var(--dashboard-accent)] bg-white" />
      {!isLast ? (
        <span className="absolute left-[5px] top-4 h-full w-px bg-[color:var(--dashboard-border)]" />
      ) : null}
      <div className="space-y-1 pb-5">
        <div className="font-semibold text-[color:var(--dashboard-text)]">
          {item.title}
        </div>
        <div className="text-sm text-[color:var(--dashboard-muted)]">
          {item.timestamp}
        </div>
      </div>
    </div>
  );
};

export default memo(OrderItem);
