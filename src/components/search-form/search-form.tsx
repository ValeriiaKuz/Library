import style from "../../pages/homepage/home-page.module.css";
import React, { FormEvent, useRef, useState } from "react";

export const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
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
        Искать
      </button>
    </form>
  );
};
