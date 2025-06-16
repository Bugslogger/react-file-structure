import React, { memo } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import "../../style/header.css";
import { ICONS_SIZE } from "../../utils/constant";

const Header = ({ handleOpen }) => {
  return (
    <div className="header header-height flex justify-between items-center px-2 border-b border-b-gray-100 w-full">
      <div className="flex justify-start items-center gap-3">
        <div className="lg:hidden block">logo</div>
        <div className="lg:hidden block" onClick={handleOpen}>
          <RxHamburgerMenu fontSize={`${ICONS_SIZE + 6}px`} />
        </div>
      </div>
      <div className="cursor-pointer">
        <img
          class="inline-block size-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default memo(Header);
