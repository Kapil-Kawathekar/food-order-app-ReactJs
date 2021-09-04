import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
export default function Modal(props) {
  const portalElement = document.getElementById("overlays");

  const Backdrop = (props) => {
    console.log(props);
    return (
      <div className={classes.backdrop} onClick={props.onBackdropClick}></div>
    );
  };

  const ModalOverlays = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  return (
    <Fragment>
      {/* <Backdrop></Backdrop>
        <ModalOverlays>{props.children}</ModalOverlays> */}
      {ReactDOM.createPortal(
        <Backdrop onBackdropClick={props.onModalBackdropClick}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </Fragment>
  );
}
