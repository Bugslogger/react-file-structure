import React, { memo } from "react";
import useValidateUser from "../../hooks/useValidateUser";

const AuthWrapper = ({ children }) => {
  const { handleValidation } = useValidateUser();
  const { isValid } = handleValidation();

  return isValid ? children : <Login />;
};

export default memo(AuthWrapper);
