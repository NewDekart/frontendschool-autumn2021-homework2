import classNames from "classnames";
import { useRef } from "react";

import { ReactComponent as ClearIcon } from "../../assets/images/svg/clear.svg";

import "./index.css";

const Input = ({
  id,
  required,
  clear = true,
  onChange,
  label,
  placeholder,
  disabled = null,
  value,
  width = "",
  textAlign = "",
  stretch = "",
  additionalComponent = null,
}) => {
  const inputRef = useRef(null);

  return (
    <div className={classNames("form-input", stretch)}>
      {label && (
        <label htmlFor={id}>
          {label}
          {required ? <span className="required">&nbsp;*</span> : null}
        </label>
      )}
      <div
        className="pos-relative input-wrappper"
        style={{ width }}
        disabled={disabled}
      >
        <input
          className={classNames("input", textAlign)}
          id={id}
          placeholder={placeholder}
          onChange={onChangeWrapper}
          value={value}
          disabled={disabled}
          ref={inputRef}
        />
        {clear && !disabled && value && (
          <ClearIcon className="clear" onClick={onClear} />
        )}
      </div>
      {additionalComponent}
    </div>
  );

  function onChangeWrapper(e) {
    e.preventDefault();
    if (onChange) {
      onChange(e.target.value);
    }
  }

  function onClear(e) {
    e.preventDefault();
    if (onChange) {
      onChange("");
    }
    inputRef.current.focus();
  }
};

export default Input;
