import React, { memo } from "react";
import { FiCreditCard, FiMusic } from "react-icons/fi";

const ICON_MAP = {
  music: FiMusic,
  card: FiCreditCard,
};

const TONE_CLASS_MAP = {
  message: "bg-[linear-gradient(180deg,#d9dde3_0%,#c4c9d1_100%)]",
  music: "bg-[linear-gradient(180deg,#22252d_0%,#111318_100%)]",
  payment: "bg-[linear-gradient(180deg,#7c8391_0%,#5f6675_100%)]",
};

const NotificationItem = ({ item }) => {
  const Icon = item.avatarType === "icon" ? ICON_MAP[item.avatar] : null;

  return (
    <div className="flex items-start gap-4">
      <div
        className={`flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full ${TONE_CLASS_MAP[item.tone] || TONE_CLASS_MAP.payment}`}
      >
        {item.avatarType === "image" ? (
          <img
            src={item.avatar}
            alt={item.subject}
            className="size-full object-cover"
          />
        ) : (
          <Icon className="text-lg text-white" />
        )}
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-1">
          <span className="dashboard-fs-14 dashboard-fw-700 text-[color:var(--dashboard-text)]">
            {item.title}
          </span>
          <span className="dashboard-fs-14 text-[color:var(--dashboard-muted)]">
            {item.subject}
          </span>
        </div>
        <div className="mt-1 dashboard-fs-12 text-[color:var(--dashboard-muted)]">
          {item.timestamp}
        </div>
      </div>
    </div>
  );
};

export default memo(NotificationItem);
