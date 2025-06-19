import React, { memo, useEffect } from "react";
import useValidateUser from "../../hooks/useValidateUser";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const { handleValidation } = useValidateUser();
  const { isValid } = handleValidation({ cookieName: "token" });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isValid) {
      navigate("/login");
      return;
    }
  }, [isValid]);

  return children;
};

export default memo(AuthWrapper);
