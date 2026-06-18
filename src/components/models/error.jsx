import React, { memo } from "react";
import StatusModal from "./statusModal";

const Error = (props) => <StatusModal variant="error" {...props} />;

export default memo(Error);
