import React, { memo } from "react";
import StatusModal from "./statusModal";

const Warning = (props) => <StatusModal variant="warning" {...props} />;

export default memo(Warning);
