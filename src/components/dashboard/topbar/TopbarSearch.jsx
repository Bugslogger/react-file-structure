import React, { memo } from "react";
import { FiSearch } from "react-icons/fi";

const TopbarSearch = ({ placeholder }) => {
  return (
    <label className="flex items-center gap-3 rounded-xl border border-[color:var(--dashboard-border)] bg-[color:var(--dashboard-surface)] px-4 py-2 text-[color:var(--dashboard-muted)] shadow-sm">
      <FiSearch className="text-base" />
      <input
        type="text"
        placeholder={placeholder}
        className="min-w-[160px] bg-transparent text-sm outline-none placeholder:text-[color:var(--dashboard-muted)]"
      />
    </label>
  );
};

export default memo(TopbarSearch);
