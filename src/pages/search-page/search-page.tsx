import { SearchForm } from "../../components/search-form/search-form";
import { useSelector } from "../../servicies/hooks/hooks";
import { Loader } from "../../components/Loader/loader";
import { Paginator } from "../../components/paginator/paginator";
import { useEffect, useState } from "react";
import style from "./search-page.module.css";
import { useParams } from "react-router-dom";
import { BookItem } from "../../components/cart/book-item/book-item";
import { ErrorWithPagination } from "../../components/error/error-with-pagination";
import { Error } from "../../components/error/error";
import { useSearchBookQuery } from "../../servicies/RTK-query/create-api/create-api";
import { bookForShelfType } from "../../servicies/types/shelf-types/shelf-types";

export const SearchPage = () => {
  const [books, setBooks] = useState<bookForShelfType[]>([]);
  let { page } = useParams();
  const { searchRequest } = useSelector((state) => state.searchReducer);
  const [currentPage, setCurrentPage] = useState<number>(page ? +page : 1);

  const {
    data: searchedBooks,
    isError,
    isLoading,
  } = useSearchBookQuery({
    book: searchRequest,
    startIndex: (currentPage - 1) * 10,
  });
  useEffect(() => {
    if (searchedBooks && searchedBooks.items) {
      setBooks(
        searchedBooks.items.map((book: { volumeInfo: any; id: string }) => ({
          bookInfo: book.volumeInfo,
          bookId: book.id,
        })),
      );
    }
  }, [searchedBooks]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const foundBooks = books.map((book) => {
    return <BookItem book={book} key={book.bookId} />;
  });

  if (isLoading || !searchedBooks) {
    return (
      <div className={style.content_wrapper}>
        <Loader />
      </div>
    );
  }
  if (isError) {
    return (
      <div className={style.content_wrapper}>
        <Error />
      </div>
    );
  }

  return (
    <div className={style.search_wrapper}>
      <div className={style.form_wrapper}>
        <SearchForm
          handlePageChange={handlePageChange}
          lastSearchRequest={searchRequest}
        />
      </div>
      {books.length > 0 && (
        <div className={style.found_books}>{foundBooks}</div>
      )}
      {searchedBooks && !searchedBooks.items && <ErrorWithPagination />}
      {books.length > 0 && searchedBooks.totalItems && (
        <Paginator
          totalItems={searchedBooks.totalItems}
          currentPage={currentPage}
          pageSize={10}
          onPageChange={handlePageChange}
        />
      )}
      {!searchedBooks.totalItems && <div> Ни одной книги не найдено</div>}
    </div>
  );
};
