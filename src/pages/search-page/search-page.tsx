import { SearchForm } from "../../components/search-form/search-form";
import { useDispatch, useSelector } from "../../servicies/hooks/hooks";
import { Loader } from "../../components/Loader/loader";
import { Paginator } from "../../components/paginator/paginator";
import { useEffect, useState } from "react";
import style from "./search-page.module.css";
import { useParams } from "react-router-dom";
import { fetchSearchBooks } from "../../servicies/actions/search-action";
import { BookItem } from "../../components/cart/book-item/book-item";
import { ErrorWithPagination } from "../../components/error/error-with-pagination";
import { Error } from "../../components/error/error";

export const SearchPage = () => {
  const dispatch = useDispatch();
  let { page } = useParams();
  const {
    isLoading,
    isError,
    isErrorWithPagination,
    books,
    totalItems,
    searchRequest,
    error,
  } = useSelector((state) => state.searchReducer);
  const [currentPage, setCurrentPage] = useState<number>(page ? +page : 1);
  useEffect(() => {
    if (searchRequest) {
      dispatch(
        fetchSearchBooks({
          book: searchRequest,
          startIndex: (currentPage - 1) * 10,
        }),
      );
    }
  }, [currentPage, searchRequest, dispatch]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const foundBooks = books.map((book) => {
    return <BookItem book={book} key={book.bookId} />;
  });

  if (isLoading) {
    return (
      <div className={style.content_wrapper}>
        <Loader />
      </div>
    );
  }
  if (isError) {
    return (
      <div className={style.content_wrapper}>
        <Error message={error?.message} />
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
      {isErrorWithPagination && <ErrorWithPagination />}
      {books.length > 0 && totalItems && (
        <Paginator
          totalItems={totalItems}
          currentPage={currentPage}
          pageSize={10}
          onPageChange={handlePageChange}
        />
      )}
      {!totalItems && <div> Ни одной книги не найдено</div>}
    </div>
  );
};
