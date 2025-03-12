import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = ({ buttonContent, open, onClose, children }) => {
  const dialog = useRef(null);
  useEffect(() => {
    if (open && dialog.current) {
      dialog.current.showModal();
    } else if (dialog.current && !open) {
      dialog.current.close();
    }
  }, [open]);

  const handleClose = () => {
    onClose();
    dialog.current?.close();
  };

  return (
    <>
      {createPortal(
        <dialog
          ref={dialog}
          onClose={onClose}
          className="backdrop:bg-stone-900/90 p-4 rounded shadow-md transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
        >
          {children}
          <form method="dialog" className="mt-4 text-right">
            <Button onClick={handleClose}>{buttonContent}</Button>
          </form>
        </dialog>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
