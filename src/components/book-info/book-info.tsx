import { Params, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../servicies/hooks/hooks";
import { useEffect, useMemo, useState } from "react";
import style from "./book-info.module.css";
import addBookSvg from "../../images/add-book.svg";
import addedBookSvg from "../../images/added-book.svg";
import { addBook, removeBook } from "../../servicies/slices/cart-slice";
import { bookForShelfType } from "../../servicies/types/shelf-types/shelf-types";
import { Loader } from "../Loader/loader";
import cover from "../../images/cover.png";
import { Error } from "../error/error";
import { useGetBookByIdQuery } from "../../servicies/RTK-query/create-api/create-api";

export const BookInfo = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [book, setBook] = useState<any>(null);
  let { id }: Readonly<Params> = useParams<string>();
  const bookCart: bookForShelfType | undefined = useMemo(
    () => location.state?.bookCart,
    [location.state],
  );
  const { data: bookFromStore, isLoading, isError } = useGetBookByIdQuery(id!);
  useEffect(() => {
    if (bookCart) {
      setBook(bookCart.bookInfo);
    }
    if (bookFromStore) {
      setBook(bookFromStore.volumeInfo);
    }
  }, [bookCart, bookFromStore]);
  const addedBooks = useSelector((state) => state.cartReducer.books);
  const isAdded = useMemo(() => {
    if (bookCart) {
      return true;
    }
    if (addedBooks.length > 0 && book) {
      return addedBooks.some(
        (addedBook) => addedBook.bookInfo.title === book.title,
      );
    }
    return false;
  }, [addedBooks, book, bookCart]);

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const readyToShow = () => {
    setIsImageLoaded(true);
  };
  const handleAddRemoveBook = (book: bookForShelfType) => {
    isAdded ? dispatch(removeBook(book)) : dispatch(addBook(book));
  };
  const imageSrc = useMemo(() => {
    if (book && book.imageLinks) {
      return book.imageLinks.medium || book.imageLinks.smallThumbnail;
    }
    return cover;
  }, [book]);
  const longBookTitle = useMemo(
    () => !!(book && book.title.split(" ").length > 5),
    [book],
  );
  if (isError) {
    return <Error />;
  }
  if (!id || !book) {
    return null;
  }

  return (
    <>
      <div className={`${isLoading || !isImageLoaded ? "" : style.hidden}`}>
        <Loader />
      </div>
      <div
        className={`${isImageLoaded ? "" : style.hidden} ${
          style.book_container
        }`}
      >
        <div className={style.book_cover}>
          <img src={imageSrc} alt={"book-cover"} onLoad={readyToShow} />
        </div>
        <div className={style.book_info}>
          <div className={`${longBookTitle ? style.long_title : style.title}`}>
            <h3>{book.title}</h3>
            <span>{book.authors}</span>
          </div>
          <div className={style.description}>
            <span className={style.secondary}>Описание</span>
            <p>{book.description}</p>
          </div>
          <div className={style.pages_and_cart}>
            <div>
              <span className={style.secondary}>Количество страниц:</span>
              <br />
              <span> {book.pageCount}</span>
            </div>
            {!bookCart && (
              <div className={style.cart}>
                <span
                  className={style.secondary}
                  onClick={() => {
                    id && handleAddRemoveBook({ bookInfo: book, bookId: id });
                  }}
                >
                  {isAdded ? `Удалить из корзины` : `Добавить в корзину`}
                </span>
                <br />
                <img
                  src={isAdded ? addedBookSvg : addBookSvg}
                  alt={"cart"}
                  onClick={() => {
                    id && handleAddRemoveBook({ bookInfo: book, bookId: id });
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
