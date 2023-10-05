import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/reducers";
import { booksApi } from "../RTK-query/create-api/create-api";
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
