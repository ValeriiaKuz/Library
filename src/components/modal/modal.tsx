import ReactDOM from "react-dom";
import ModalOverlay from "./modal-overlay";
import React, { FC, PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./modal.module.css";

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    const escClose = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        navigate(location.state?.background.pathname || "/");
      }
    };
    document.addEventListener("keydown", escClose);
    document.body.classList.add(style.modalOpen);

    return () => {
      document.removeEventListener("keydown", escClose);
      document.body.classList.remove(style.modalOpen);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay>
        <div
          className={style.modal_wrapper}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            e.stopPropagation()
          }
        >
          <div
            className={style.close_element}
            onClick={() => {
              navigate(location.state?.background.pathname || "/");
            }}
          />
          <div className={style.content}>{children}</div>
        </div>
      </ModalOverlay>
    </>,
    document.getElementById("modals")!,
  );
};
