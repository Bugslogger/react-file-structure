import React, { memo } from "react";
import StatusModal from "./statusModal";

const Success = (props) => <StatusModal variant="success" {...props} />;

export default memo(Success);
