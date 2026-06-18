import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import useValidateUser from "../../hooks/useValidateUser";
import { useNavigate } from "react-router-dom";
import { clearCredentials, setCredentials } from "../../redux/reducer";

const AuthWrapper = ({ children }) => {
  const { handleValidation } = useValidateUser();
  const { isValid, user, token } = handleValidation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isValid) {
      dispatch(clearCredentials());
      navigate("/login", { replace: true });
      return;
    }
    dispatch(setCredentials({ user, token }));
  }, [dispatch, isValid, navigate, token, user]);

  if (!isValid) {
    return null;
  }

  return children;
};

export default memo(AuthWrapper);
