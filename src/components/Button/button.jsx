import React, { memo } from "react";
import PropTypes from "prop-types";
const Button = ({
  text,
  children,
  ButtonClick,
  className = { isReplace: false, Class: null },
  ButtonTouch,
  type = "submit",
  disbale = false,
}) => {
  return (
    <button
      type={type}
      disabled={disbale}
      onClick={ButtonClick}
      onTouchMove={ButtonTouch}
      className={
        className.isReplace
          ? className.Class
          : `${className.Class} cursor-pointer font-semibold border-[1px] text-xs px-4 py-2 rounded-sm`
      }
    >
      {text || children}
    </button>
  );
};

export default memo(Button);

Button.prototype = {
  text: PropTypes.string,
  children: PropTypes.element,
  ButtonClick: PropTypes.func,
  className: PropTypes.exact({
    Class: PropTypes.string,
    isReplace: PropTypes.bool,
  }),
  ButtonTouch: PropTypes.func,
};
