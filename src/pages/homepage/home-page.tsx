import React, { useEffect, useState } from "react";
import style from "./home-page.module.css";
import { SearchForm } from "../../components/search-form/search-form";
import { BookShelf } from "../../components/book-shelf/book-shelf";
import { Shelf } from "../../servicies/types/shelf-types/shelf-types";
import { Loader } from "../../components/Loader/loader";
import { Error } from "../../components/error/error";
import { useGetShelfByNumberQuery } from "../../servicies/RTK-query/create-api/create-api";

export const HomePage = () => {
  const {
    data: worldClassicData,
    isError: worldClassicError,
    isLoading: worldClassicLoading,
  } = useGetShelfByNumberQuery(Shelf["Мировая классика"]);
  const {
    data: pulitzerData,
    isError: pulitzerError,
    isLoading: pulitzerLoading,
  } = useGetShelfByNumberQuery(Shelf["Лауреаты пулитцеровской премии"]);
  const {
    data: russianClassicData,
    isError: russianClassicError,
    isLoading: russianClassicLoading,
  } = useGetShelfByNumberQuery(Shelf["Классическая русская литература"]);

  // async thunks Redux переписан ан RTK Query

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchShelf(Shelf["Мировая классика"]));
  //   dispatch(fetchShelf(Shelf["Лауреаты пулитцеровской премии"]));
  //   dispatch(fetchShelf(Shelf["Классическая русская литература"]));
  // }, [dispatch]);

  // const worldClassicShelf = worldClassicData.items.map(
  //   (book: { volumeInfo: any; id: string }) => ({
  //     bookInfo: book.volumeInfo,
  //     bookId: book.id,
  //   }),
  // );
  // const russianClassicShelf = russianClassicData.items.map(
  //   (book: { volumeInfo: any; id: string }) => ({
  //     bookInfo: book.volumeInfo,
  //     bookId: book.id,
  //   }),
  // );
  // const PulitzerShelf = pulitzerData.items.map(
  //   (book: { volumeInfo: any; id: string }) => ({
  //     bookInfo: book.volumeInfo,
  //     bookId: book.id,
  //   }),
  // );

  // const { isError, isLoading, russianClassicShelf, PulitzerShelf } =
  //   useSelector((state) => state.shelfReducer);
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    const newMoveX = (e.clientX - window.innerWidth / 2) * -0.0025;
    const newMoveY = (e.clientY - window.innerHeight / 2) * -0.007;
    setMoveX(newMoveX);
    setMoveY(newMoveY);
  };
  useEffect(() => {
    document.documentElement.style.setProperty("--move-x", `${moveX}deg`);
    document.documentElement.style.setProperty("--move-y", `${moveY}deg`);
  }, [moveX, moveY]);

  if (worldClassicLoading || pulitzerLoading || russianClassicLoading) {
    return <Loader />;
  }
  if (worldClassicError || pulitzerError || russianClassicError) {
    return <Error />;
  }
  if (
    !worldClassicData.items ||
    !russianClassicData.items ||
    !pulitzerData.items
  ) {
    return <Loader />;
  }
  return (
    <>
      <section className={style.layers} onMouseMove={handleMouseMove}>
        <div className={style.layers__container}>
          <div className={`${style.layers__item} ${style.layer_1}`}></div>
          <div className={`${style.layers__item} ${style.layer_2}`}></div>
          <div className={`${style.layers__item} ${style.layer_3}`}></div>
          <div className={`${style.layers__item} ${style.layer_4}`}>
            <div className={style.form_wrapper}>
              <SearchForm />
            </div>
          </div>
          <div className={`${style.layers__item} ${style.layer_5}`}></div>
          <div className={`${style.layers__item} ${style.layer_6}`}></div>
        </div>
      </section>
      <main>
        <BookShelf
          shelfTitle={Shelf["Мировая классика"]}
          books={worldClassicData.items.map(
            (book: { volumeInfo: any; id: string }) => ({
              bookInfo: book.volumeInfo,
              bookId: book.id,
            }),
          )}
        />
        <BookShelf
          shelfTitle={Shelf["Классическая русская литература"]}
          books={russianClassicData.items.map(
            (book: { volumeInfo: any; id: string }) => ({
              bookInfo: book.volumeInfo,
              bookId: book.id,
            }),
          )}
        />
        <BookShelf
          shelfTitle={Shelf["Лауреаты пулитцеровской премии"]}
          books={pulitzerData.items.map(
            (book: { volumeInfo: any; id: string }) => ({
              bookInfo: book.volumeInfo,
              bookId: book.id,
            }),
          )}
        />
      </main>
    </>
  );
};
