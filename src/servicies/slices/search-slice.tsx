import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { bookForShelfType } from "../types/shelf-types/shelf-types";
type searchType = {
  searchRequest: string;
  totalItems: number | null;
  books: Array<bookForShelfType>;
  error: SerializedError | null;
  isErrorWithPagination: boolean;
  isLoading: boolean;
  isError: boolean;
};
const initialState: searchType = {
  searchRequest: "",
  totalItems: null,
  books: [],
  error: null,
  isErrorWithPagination: false,
  isLoading: false,
  isError: false,
};
const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    searchRequest(state, action) {
      state.searchRequest = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchSearchBooks.pending, (state) => {
  //       state.isLoading = true;
  //       state.isError = false;
  //     })
  //     .addCase(fetchSearchBooks.fulfilled, (state, action) => {
  //       if (action.meta.arg.startIndex === 0) {
  //         state.books = action.payload.books;
  //         state.totalItems = action.payload.totalItems;
  //         state.isLoading = false;
  //         state.isError = false;
  //         state.isErrorWithPagination = false;
  //       } else if (
  //         action.meta.arg.startIndex !== 0 &&
  //         action.payload.books.length === 0
  //       ) {
  //         state.books = action.payload.books;
  //         state.isLoading = false;
  //         state.isError = false;
  //         state.isErrorWithPagination = true;
  //       } else {
  //         state.books = action.payload.books;
  //         state.isLoading = false;
  //         state.isError = false;
  //         state.isErrorWithPagination = false;
  //       }
  //     })
  //     .addCase(fetchSearchBooks.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.error = action.error;
  //     });
  // },
});
export const { searchRequest } = searchSlice.actions;
export default searchSlice.reducer;
