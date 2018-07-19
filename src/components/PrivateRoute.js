import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return rest.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

export default PrivateRoute;
