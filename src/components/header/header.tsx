import style from "./header.module.css";
import cart from "../../images/books-logo.svg";
import { useSelector } from "../../servicies/hooks/hooks";
import { NavLink } from "react-router-dom";
export const Header = () => {
  const cartCount = useSelector((state) => state.cartReducer.books).length;

  return (
    <header className={style.header}>
      <NavLink to={"/"} className={style.title}>
        LIBRARY
      </NavLink>
      <nav>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            `${isActive ? `${style.active} ` : ""}${style.cart}`
          }
        >
          {cartCount === 0 ? null : (
            <div className={style.count}>{cartCount}</div>
          )}
          <img src={cart} alt={"cart"} />
        </NavLink>
      </nav>
    </header>
  );
};
