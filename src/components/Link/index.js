import classNames from "classnames";

import "./index.css";

const Link = ({ href, children, target = "_self", className = "" }) => {
  return (
    <a href={href} target={target} className={classNames("a", className)}>
      {children}
    </a>
  );
};

export default Link;
