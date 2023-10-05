import { combineReducers } from "@reduxjs/toolkit";
import cartSliceReducer from "../slices/cart-slice";
import searchSliceReducer from "../slices/search-slice";
import { booksApi } from "../RTK-query/create-api/create-api";

export const rootReducer = combineReducers({
  // shelfReducer: shelfSliceReducer,
  // bookReducer: bookSliceReducer,
  cartReducer: cartSliceReducer,
  searchReducer: searchSliceReducer,
  [booksApi.reducerPath]: booksApi.reducer,
});
