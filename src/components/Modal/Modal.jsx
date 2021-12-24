import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import React, { useEffect } from "react";

const Modal = React.memo((props) => {
  return (
    <>
      <Backdrop show={props.show} close={props.closeBackdrop} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
});

export default Modal;
