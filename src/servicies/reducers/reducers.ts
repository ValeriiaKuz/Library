import { combineReducers } from "@reduxjs/toolkit";
import shelfSliceReducer from "../slices/shelf-slice";
import bookSliceReducer from "../slices/book-slice";
import cartSliceReducer from "../slices/cart-slice";

export const rootReducer = combineReducers({
  shelfReducer: shelfSliceReducer,
  bookReducer: bookSliceReducer,
  cartReducer: cartSliceReducer,
});
