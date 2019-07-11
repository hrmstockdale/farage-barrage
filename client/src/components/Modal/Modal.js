import React from "react";
import ReactDOM from "react-dom";
import * as S from "./Modal.style";

const OpenModal = ({ toggle, content }) => {
  const [isShown, setIsShown] = React.useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <React.Fragment>
      {toggle(show)}
      {isShown && content(hide)}
    </React.Fragment>
  );
};

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <S.Modal>{children}</S.Modal>,
    document.getElementById("modal-root")
  );
};

export { OpenModal, Modal };
