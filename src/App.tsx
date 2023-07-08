import React from "react";
import { HomePage } from "./pages/homepage/home-page";
import { Header } from "./components/header/header";

import { Route, Routes, useLocation } from "react-router-dom";
import { Modal } from "./components/modal/modal";
import { BookInfo } from "./components/book-info/book-info";

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <>
      <Header />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<Modal children={<BookInfo />} />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/books/:id"
            element={<Modal children={<BookInfo />} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
