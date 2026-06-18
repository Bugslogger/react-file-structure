import React, { memo } from "react";

const MemberStack = ({ members }) => {
  return (
    <div className="flex -space-x-2">
      {members.map((member, index) => (
        <span
          key={`${member}-${index}`}
          className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-[color:var(--dashboard-primary)] text-[11px] font-semibold text-white"
        >
          {member}
        </span>
      ))}
    </div>
  );
};

export default memo(MemberStack);
