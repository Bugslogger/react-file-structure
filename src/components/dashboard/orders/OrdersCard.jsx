import React, { memo } from "react";
import SurfaceCard from "../shared/SurfaceCard";
import SectionHeader from "../shared/SectionHeader";
import OrderItem from "./OrderItem";
import { DASHBOARD_ORDERS } from "../../../utils/dashboard.config";

const OrdersCard = () => {
  return (
    <SurfaceCard className="px-4 py-4">
      <SectionHeader title="Orders overview" subtitle="24% this month" />

      <div className="mt-5">
        {DASHBOARD_ORDERS.map((item, index) => (
          <OrderItem
            key={item.id}
            item={item}
            isLast={index === DASHBOARD_ORDERS.length - 1}
          />
        ))}
      </div>
    </SurfaceCard>
  );
};

export default memo(OrdersCard);
