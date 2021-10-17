import classNames from "classnames";

import "./index.css";

const Link = ({ href, children, target, className = "" }) => {
  return (
    <a href={href} target={target} className={classNames("link", className)}>
      {children}
    </a>
  );
};

export default Link;
