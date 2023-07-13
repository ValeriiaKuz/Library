import style from "./paginator.module.css";
import { usePagination, DOTS } from "./pagination-hook";
import { NavLink } from "react-router-dom";
type paginatorType = {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
};
export const Paginator = ({
  totalItems,
  currentPage,
  pageSize = 10,
  onPageChange,
  siblingCount = 1,
}: paginatorType) => {
  const paginationRange = usePagination({
    currentPage,
    totalItems,
    siblingCount,
    pageSize,
  });
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className={style.pagination_container}>
      <li className={style.pagination_item} onClick={onPrevious}>
        <div className={style.left} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className={`${style.pagination_item} ${style.dots}`}
              key={`dots-${index}`}
            >
              &#8230;
            </li>
          );
        }

        return (
          <NavLink
            to={`/search/${pageNumber}`}
            className={`${style.pagination_item} ${
              pageNumber === currentPage ? style.selected : ""
            }`}
            onClick={() => onPageChange(pageNumber as number)}
            key={pageNumber}
          >
            {pageNumber}
          </NavLink>
        );
      })}
      <li className={style.pagination_item} onClick={onNext}>
        <div className={style.right} />
      </li>
    </ul>
  );
};
