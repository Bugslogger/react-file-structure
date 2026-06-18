import React, { memo } from "react";

const SurfaceCard = ({ children, className = "", style }) => {
  return (
    <section className={`dashboard-surface ${className}`} style={style}>
      {children}
    </section>
  );
};

export default memo(SurfaceCard);
