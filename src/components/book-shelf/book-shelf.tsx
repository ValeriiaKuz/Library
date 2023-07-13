import { FC } from "react";
import { BookCard } from "./book-card";
import {
  bookForShelfType,
  Shelf,
} from "../../servicies/types/shelf-types/shelf-types";
import style from "./book-shelf.module.css";
type BookShelfPropsType = {
  shelfTitle: Shelf;
  books: bookForShelfType[];
};
export const BookShelf: FC<BookShelfPropsType> = ({ shelfTitle, books }) => {
  return (
    <section className={style.shelf_section}>
      <h2>{Shelf[shelfTitle]} </h2>
      <div className={style.shelf}>
        {books.map((book) => {
          return <BookCard book={book} key={book.bookId} />;
        })}
      </div>
    </section>
  );
};
