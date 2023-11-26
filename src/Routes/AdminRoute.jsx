import React from "react";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
  const user= useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  
  if ( isAdminLoading) {
    return (
      <h1 className="text-center font-bold text-8xl text-rose-300">
        Oops Sorry
      </h1>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
