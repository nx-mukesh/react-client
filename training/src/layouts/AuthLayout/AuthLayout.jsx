import React from 'react';
import { PropTypes } from 'prop-types';

const AuthLayout = (props) => {
  const { children } = props;
  return <div className="authLayout">{children}</div>;
};

AuthLayout.prototype = {
  children: PropTypes.element.isRequired,
};
export default AuthLayout;
