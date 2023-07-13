import { combineReducers } from "@reduxjs/toolkit";
import shelfSliceReducer from "../slices/shelf-slice";
import bookSliceReducer from "../slices/book-slice";
import cartSliceReducer from "../slices/cart-slice";
import searchSliceReducer from "../slices/search-slice";

export const rootReducer = combineReducers({
  shelfReducer: shelfSliceReducer,
  bookReducer: bookSliceReducer,
  cartReducer: cartSliceReducer,
  searchReducer: searchSliceReducer,
});
