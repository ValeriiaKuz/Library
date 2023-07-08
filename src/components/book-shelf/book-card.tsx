import { FC } from "react";
import { bookForShelfType } from "../../servicies/types/shelf-types/shelf-types";
import style from "./book-shelf.module.css";
import { NavLink, useLocation } from "react-router-dom";
export const BookCard: FC<{ book: bookForShelfType }> = ({ book }) => {
  const location = useLocation();
  return (
    <NavLink
      to={`/books/${book.bookId}`}
      state={{ background: location }}
      className={style.link}
    >
      <div className={style.card}>
        <div className={style.img_container}>
          <img src={book.bookInfo.imageLinks.smallThumbnail} alt={"cover"} />
        </div>
        <p className={style.title}>{book.bookInfo.title}</p>
        <p className={style.auth}>{book.bookInfo.authors}</p>
      </div>
    </NavLink>
  );
};
