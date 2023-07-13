import { useDispatch, useSelector } from "../../servicies/hooks/hooks";
import { removeAllBooks } from "../../servicies/slices/cart-slice";
import { NavLink } from "react-router-dom";
import { BookItem } from "../../components/cart/book-item/book-item";
import style from "./cart-page.module.css";
export const Cart = () => {
  const dispatch = useDispatch();
  const booksInCart = useSelector((state) => state.cartReducer.books);
  const deleteAllBooks = () => {
    dispatch(removeAllBooks());
  };
  const bookCards = booksInCart.map((book) => {
    return <BookItem book={book} key={book.bookId} />;
  });
  return (
    <div className={style.cart}>
      <h2>Корзина</h2>
      {booksInCart.length === 0 ? (
        <div className={style.no_books_in_cart}>
          <span>Вы не выбрали ни одной книги</span>
          <NavLink to={"/"} className={style.back}>
            Вернуться к поиску
          </NavLink>
        </div>
      ) : (
        <div>
          <div onClick={deleteAllBooks} className={style.delete_all}>
            Удалить все ({booksInCart.length})
          </div>
          <div>{bookCards}</div>
          <button className={style.order_button}>Оформить заказ</button>
        </div>
      )}
    </div>
  );
};
