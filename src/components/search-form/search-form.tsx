import style from "../../pages/homepage/home-page.module.css";
import React, { FC, FormEvent, useRef, useState } from "react";
import { useDispatch } from "../../servicies/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { searchRequest } from "../../servicies/slices/search-slice";
type searchFormPropsType = {
  handlePageChange?: (page: number) => void;
  lastSearchRequest?: string;
};
export const SearchForm: FC<searchFormPropsType> = ({
  handlePageChange,
  lastSearchRequest = "",
}) => {
  const [searchInput, setSearchInput] = useState(lastSearchRequest);
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (handlePageChange) {
      handlePageChange(1);
    }
    if (searchInput.length > 0) {
      dispatch(searchRequest(searchInput));
      navigate("/search/1");
    }
  };
  return (
    <form className={style.searchForm} onSubmit={onFormSubmit}>
      <input
        value={searchInput}
        ref={searchRef}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        className={style.searchInput}
        type={"text"}
        placeholder={"Введите название книги"}
      />
      <button className={style.searchButton} type={"submit"}>
        Поиск
      </button>
    </form>
  );
};
