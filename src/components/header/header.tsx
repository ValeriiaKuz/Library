import style from "./header.module.css";
import cart from "../../images/books-logo.svg";
import { useSelector } from "../../servicies/hooks/hooks";
export const Header = () => {
  const cartCount = useSelector((state) => state.cartReducer.books).length;

  return (
    <header className={style.header}>
      <span className={style.title}>LIBRARY</span>
      <nav>
        <div className={style.cart}>
          {cartCount === 0 ? null : (
            <div className={style.count}>{cartCount}</div>
          )}
          <img src={cart} alt={"cart"} />
        </div>
      </nav>
    </header>
  );
};
