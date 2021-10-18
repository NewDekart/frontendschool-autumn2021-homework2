import classNames from "classnames";

import "./index.css";

const Heading = ({ type, color = "c-black", children, className }) => {
  return <h1 className={classNames("heading", type, color, className)}>{children}</h1>;
};

export default Heading;
