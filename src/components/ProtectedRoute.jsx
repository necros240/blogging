// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      user ? <Component {...props} /> : <Navigate to="/login" />
    }
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  user: PropTypes.object,
};

export default ProtectedRoute;
