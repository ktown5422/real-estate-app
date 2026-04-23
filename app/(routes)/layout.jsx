import React from 'react';
import Provider from '../Provider';

function RoutesLayout({ children }) {
  return <Provider>{children}</Provider>;
}

export default RoutesLayout;
