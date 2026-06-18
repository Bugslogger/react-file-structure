import React, { memo } from "react";
import SurfaceCard from "../shared/SurfaceCard";
import NotificationItem from "./NotificationItem";
import { DASHBOARD_NOTIFICATIONS } from "../../../utils/dashboard.config";

const NotificationPopup = ({ className = "" }) => {
  return (
    <div
      className={`absolute right-0 top-full z-50 mt-3 w-[22rem] max-w-[calc(100vw-1.5rem)] ${className}`}
    >
      <SurfaceCard className="overflow-hidden px-4 py-4">
        <div className="space-y-4">
          {DASHBOARD_NOTIFICATIONS.map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}
        </div>
      </SurfaceCard>
    </div>
  );
};

export default memo(NotificationPopup);
