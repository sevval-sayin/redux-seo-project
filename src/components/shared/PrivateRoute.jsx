// src/components/shared/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, roles }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.userRole);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (!roles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return element; // Return the passed element if the user is authenticated and has the right role
};

export default PrivateRoute;
