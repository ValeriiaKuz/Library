import style from "./loader.module.css";
export const Loader = () => {
  return (
    <div className={style.loader}>
      <span className={style.loader_ball}></span>
      <span className={style.loader_ball}></span>
      <span className={style.loader_ball}></span>
    </div>
  );
};
