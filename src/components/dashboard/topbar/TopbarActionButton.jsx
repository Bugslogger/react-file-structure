import React, { memo } from "react";

const TopbarActionButton = ({ label, className = "", onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition ${className}`}
    >
      {label}
    </button>
  );
};

export default memo(TopbarActionButton);
