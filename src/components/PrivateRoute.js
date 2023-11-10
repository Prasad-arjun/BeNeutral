import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from './AuthContext';

export const PrivateRoute = ({ path, ...props }) => {
  const { isAuthenticated } = useAuthState();

  if (!isAuthenticated) {
    // Redirect to a login page or another route if the user is not authenticated
    return <Navigate to="/login" />;
  }

  return <Route path={path} {...props} />;
};
