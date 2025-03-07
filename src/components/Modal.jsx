import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = ({ ref, buttonContent, children }) => {
  const dialog = useRef(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialog.current.showModal();
        },
        close() {
          dialog.current.close();
        },
      };
    },
    []
  );

  return (
    <>
      {createPortal(
        <dialog
          ref={dialog}
          className="backdrop:bg-stone-900/90 p-4 rounded shadow-md "
        >
          {children}
          <form method="dialog" className="mt-4 text-right">
            <Button onClick={() => ref.current.close()}>{buttonContent}</Button>
          </form>
        </dialog>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
