import { Params, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../servicies/hooks/hooks";
import { useEffect, useState } from "react";
import { fetchBook } from "../../servicies/actions/book-action";
import { resetBook } from "../../servicies/slices/book-slice";
import style from "./book-info.module.css";
import addBookSvg from "../../images/add-book.svg";
import addedBookSvg from "../../images/added-book.svg";
import { addBook, removeBook } from "../../servicies/slices/cart-slice";
export const BookInfo = () => {
  let { id }: Readonly<Params> = useParams<string>();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchBook(id));
    }
    return () => {
      dispatch(resetBook());
    };
  }, [id, dispatch]);

  const { isLoading, isError, book } = useSelector(
    (state) => state.bookReducer,
  );
  const addedBooks = useSelector((state) => state.cartReducer.books);
  const isAdded =
    addedBooks && book
      ? addedBooks.some((addedBook) => addedBook.title === book.title)
      : false;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  if (isLoading) {
    return <div>Загрузка</div>;
  }
  if (isError || !id) {
    return <div>Ошибка</div>;
  }
  if (!book) {
    return null;
  }

  return (
    <>
      <div className={`${isImageLoaded ? style.hidden : ""}`}>Загрузка</div>
      <div
        className={`${isImageLoaded ? "" : style.hidden} ${
          style.book_container
        }`}
      >
        <div className={style.book_cover}>
          <img
            src={book.imageLinks.medium}
            alt={"book-cover"}
            onLoad={handleImageLoad}
          />
        </div>
        <div className={style.book_info}>
          <div className={style.title}>
            <h3>{book.title}</h3>
            <span>{book.authors}</span>
          </div>
          <div className={style.description}>
            <span className={style.secondary}>Описание</span>
            <p>{book.description}</p>
          </div>
          <div>
            <span className={style.secondary}>Количество страниц:</span>
            <br />
            <span> {book.pageCount}</span>
          </div>
          <div className={style.logo}>
            <span className={style.secondary}>
              {isAdded ? `Удалить из корзины` : `Добавить в корзину`}
            </span>
            <img
              src={isAdded ? addedBookSvg : addBookSvg}
              alt={'cart'}
              onClick={() => {
                isAdded ? dispatch(removeBook(book)) : dispatch(addBook(book));
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
