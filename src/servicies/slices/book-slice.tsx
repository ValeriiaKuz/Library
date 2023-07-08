import { createSlice } from "@reduxjs/toolkit";
import { bookType } from "../types/shelf-types/shelf-types";
import { fetchBook } from "../actions/book-action";
type bookInitialType = {
  book: bookType | null;
  isLoading: boolean;
  isError: boolean;
};
const initialState: bookInitialType = {
  book: null,
  isLoading: false,
  isError: false,
};
const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    resetBook(state) {
      state.book = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.book = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchBook.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { resetBook } = bookSlice.actions;
export default bookSlice.reducer;
