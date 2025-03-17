import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = true;

  return (isAuthenticated ? <Outlet /> : <Navigate to="/login" />);
};

export default ProtectedRoute;
