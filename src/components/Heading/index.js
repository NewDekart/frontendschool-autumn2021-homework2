import React from 'react'

import classNames from "classnames";

import "./index.css";

const Heading = ({ type, color = "c-black", children }) => {
  return <h1 className={classNames("h", type, color)}>{children}</h1>;
};

export default Heading;
