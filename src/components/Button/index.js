import React from 'react'

import classNames from "classnames";

import "./index.css";

export const Button = ({
  children,
  type,
  size = "sm",
  stretch,
  disabled,
  onClick,
  className,
}) => {
  return (
    <button
      className={classNames(
        "btn",
        `btn-${type}`,
        `btn-${size}`,
        stretch,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
