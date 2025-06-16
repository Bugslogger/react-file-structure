import React, { memo } from "react";
import PropTypes from "prop-types";

import LayoutWrapper from "../components/wrappers/layoutWrapper";

const RouterWithLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

RouterWithLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default memo(RouterWithLayout);
