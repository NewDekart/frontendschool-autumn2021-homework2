import classNames from "classnames";

import "./index.css";

const Form = ({ margin, children }) => {
  return (
    <form className={classNames("form", margin)}>
      {children}
    </form>
  );
};

const Body = ({ children }) => {
  return (
    <div className="form-body">{children}</div>
  )
}

const Buttons = ({ children }) => {
  return (
    <div className="form-buttons">{children}</div>
  )
}

Form.Body = Body
Form.Buttons = Buttons

export default Form;
