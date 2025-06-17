import React, { memo, useState } from "react";
import Drawer from "../drawer";
import Header from "../header";
import ModelWrapper from "./modelWrapper";

const LayoutWrapper = ({ children }) => {
  const [close, setclose] = useState(false);

  function handleClose() {
    setclose(false);
    console.log("Clicked");
  }

  function handleOpen() {
    setclose(true);
  }

  return (
    <div className="flex justify-start items-start w-full h-screen">
      <div className="h-full border-r-gray-100 border-r lg:block hidden">
        <Drawer />
      </div>
      <ModelWrapper
        className="lg:hidden block"
        open={close}
        handleClose={handleClose}
      >
        <Drawer isMobile handleClose={handleClose} className="bg-white px-1" />
      </ModelWrapper>
      <div className="h-full w-full overflow-y-auto">
        <Header handleOpen={handleOpen} />
        <div className="w-full h-[calc(100%_-_55px)] p-2">{children}</div>
      </div>
    </div>
  );
};

export default memo(LayoutWrapper);
