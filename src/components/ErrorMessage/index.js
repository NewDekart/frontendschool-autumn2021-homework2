import React from 'react'

import { ReactComponent as ErrorIcon } from "../../assets/images/svg/error.svg";

import "./index.css";

const ErrorMessage = ({ children }) => {
  return (
    <div className="error">
      <ErrorIcon width="22px" />
      <span className="error-message">{children}</span>
    </div>
  );
};

export default ErrorMessage;
