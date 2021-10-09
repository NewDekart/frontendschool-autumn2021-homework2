import { useEffect, useCallback } from "react";

import "./index.css";

const Modal = ({ children, width, onClose }) => {
  const memoizedOnEsc = useCallback(onEsc, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", memoizedOnEsc, false);

    return () => {
      document.removeEventListener("keydown", memoizedOnEsc, false);
    };
  }, [memoizedOnEsc]);

  return (
    <div className="modal-overlay" onClick={onCloseWrapper}>
      <div className="modal-content" style={{ width }} onClick={onClick}>
        {children}
      </div>
    </div>
  );

  function onCloseWrapper(e) {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  }

  function onClick(e) {
    e.stopPropagation();
  }

  function onEsc(e) {
    if (e.keyCode === 27) {
      if (onClose) {
        onClose();
      }
    }
  }
};

export default Modal;
