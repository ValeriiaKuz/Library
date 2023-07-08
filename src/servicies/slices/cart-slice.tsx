import { createSlice } from "@reduxjs/toolkit";
import { bookType } from "../types/shelf-types/shelf-types";
type cartInitialStateType = {
  books: Array<bookType>;
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
        (book) => book.title === action.payload.title,
      );
      if (index !== -1) {
        state.books.splice(index, 1);
      }
    },
  },
});
export const { addBook, removeBook } = cartSlice.actions;
export default cartSlice.reducer;
