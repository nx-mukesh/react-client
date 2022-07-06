import React from 'react';
import { PropTypes } from 'prop-types';
import { Route } from 'react-router-dom';
import PrivateLayout from '../layouts/PrivateLayout/PrivateLayout';


const token = localStorage.getItem(token)
const PrivateRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={() => (
      <PrivateLayout>
        <Component />
      </PrivateLayout>
    )}
  />
);

PrivateRoute.prototype = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
