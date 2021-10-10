import React from 'react'

import "./index.css";

const Layout = ({ children }) => {
  return (
    <div className="outer-layout">
      <div className="layout">{children}</div>
    </div>
  );
};

export default Layout;
