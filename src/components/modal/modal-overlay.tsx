import { useLocation, useNavigate } from "react-router-dom";
import style from "./modal.module.css";
import { FC, PropsWithChildren } from "react";

const ModalOverlay: FC<PropsWithChildren> = ({ children }) => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div
      className={style.overlay}
      onClick={() => {
        navigate(location.state?.background.pathname || "/");
      }}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
