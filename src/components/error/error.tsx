import errorImg from "../../images/book-error.png";
import { NavLink } from "react-router-dom";
import style from "./error.module.css";
import { FC } from "react";
export const Error: FC<{ message?: string }> = ({ message }) => {
  return (
    <div className={`${style.error} ${style.wrapper}`}>
      <p> Oops! Что-то пошло не так</p>
      <span>Ошибка : {message}</span>
      <img src={errorImg} alt={"error"} />
      <NavLink to={"/"}>Вернуться на главную страницу</NavLink>
    </div>
  );
};
