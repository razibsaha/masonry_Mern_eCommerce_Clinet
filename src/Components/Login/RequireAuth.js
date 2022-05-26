import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={{ form: location }} to="/login" replace></Navigate>;
  }
  return children;
};
export default RequireAuth;
