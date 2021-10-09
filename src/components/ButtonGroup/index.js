import classNames from "classnames";

import "./index.css";

const ButtonGroup = ({ children, stretch }) => {
  return <div className={classNames("btn-group", stretch)}>{children}</div>;
};

export default ButtonGroup;
