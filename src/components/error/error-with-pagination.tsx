import { NavLink } from "react-router-dom";
import cat from "../../images/cat.png";
import style from "./error.module.css";

export const ErrorWithPagination = () => {
  return (
    <div className={style.error}>
      <p>Google Book API работает некорректно, поэтому вы видите тут котика</p>
      <img src={cat} alt={"error"} />
      <NavLink to={"/"}>Вернуться на главную страницу</NavLink>
    </div>
  );
};
