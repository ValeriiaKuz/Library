import { createSlice } from "@reduxjs/toolkit";
import { bookForShelfType } from "../types/shelf-types/shelf-types";
type cartInitialStateType = {
  books: Array<bookForShelfType>;
};
const initialState: cartInitialStateType = {
  books: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books = [...state.books, action.payload];
    },
    removeBook(state, action) {
      const index = state.books.findIndex(
        (book) => book.bookId === action.payload.bookId,
      );
      if (index !== -1) {
        state.books.splice(index, 1);
      }
    },
    removeAllBooks(state) {
      state.books = [];
    },
  },
});
export const { addBook, removeBook, removeAllBooks } = cartSlice.actions;
export default cartSlice.reducer;
