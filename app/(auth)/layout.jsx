import React from 'react';
import Provider from '../Provider';

function AuthLayout({ children }) {
  return <Provider>{children}</Provider>;
}

export default AuthLayout;
