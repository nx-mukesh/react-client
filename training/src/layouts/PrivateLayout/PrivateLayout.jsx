import React from 'react';
import { PropTypes } from 'prop-types';
import { Navbar, Footer } from '../components';

const PrivateLayout = (props) => {
  const { children } = props;
  return (
    <div className="authLayout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

PrivateLayout.prototype = {
  children: PropTypes.func.isRequired,
};

export default PrivateLayout;
