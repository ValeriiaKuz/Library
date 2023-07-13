import style from "../../../pages/cart-page/cart-page.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { FC } from "react";
import { bookForShelfType } from "../../../servicies/types/shelf-types/shelf-types";
import { useDispatch } from "../../../servicies/hooks/hooks";
import { removeBook } from "../../../servicies/slices/cart-slice";
import cover from "../../../images/cover.png";
export const BookItem: FC<{ book: bookForShelfType }> = ({ book }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const imgSrc = book.bookInfo.imageLinks
    ? location.pathname.startsWith("/search")
      ? book.bookInfo.imageLinks?.smallThumbnail
      : book.bookInfo.imageLinks.small
    : cover;
  const stateForLink = location.pathname.startsWith("/search")
    ? { background: location }
    : { bookCart: book, background: location };
  const deleteBook = (book: bookForShelfType) => {
    dispatch(removeBook(book));
  };
  return (
    <div className={style.book_card}>
      <NavLink
        to={`/books/${book.bookId}`}
        state={stateForLink}
        className={style.link}
      >
        <img className={style.cover} src={imgSrc} alt={"book-cover"} />
        <div className={style.book_info}>
          <span>{book.bookInfo.title}</span>
          <span className={style.auth}>{book.bookInfo.authors}</span>
        </div>
      </NavLink>
      {location.pathname.startsWith("/cart") && (
        <div onClick={() => deleteBook(book)} className={style.delete}>
          Удалить
        </div>
      )}
    </div>
  );
};
