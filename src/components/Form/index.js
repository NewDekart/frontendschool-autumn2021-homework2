import classNames from "classnames";

import "./index.css";

const Form = ({ children, buttons, margin }) => {
  return (
    <form className={classNames("form", margin)}>
      <div className="form-body">{children}</div>
      <div className="form-buttons">{buttons}</div>
    </form>
  );
};

export default Form;
