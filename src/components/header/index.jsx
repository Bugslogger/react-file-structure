import React, { memo } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import "../../style/header.css";
import { ICONS_SIZE } from "../../utils/constant";
import Dropdown from "../dropdown/dropdown";

const Header = ({ handleOpen }) => {
  return (
    <div className="header header-height flex justify-between items-center px-2 border-b border-b-gray-100 w-full">
      <div className="flex justify-start items-center gap-3">
        <div className="lg:hidden block">logo</div>
        <div className="lg:hidden block" onClick={handleOpen}>
          <RxHamburgerMenu fontSize={`${ICONS_SIZE + 6}px`} />
        </div>
      </div>
      <Dropdown />
    </div>
  );
};

export default memo(Header);
