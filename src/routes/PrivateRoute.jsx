/* eslint-disable react/prop-types */
// import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  //   const navigate = useNavigate();
  //   console.log(location);

  if (loading) {
    return (
      <div className="min-h-screen mx-auto flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/signIn"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
