import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIkey, baseURL, myUserId } from "../../API/API";
import { Shelf } from "../../types/shelf-types/shelf-types";

export const booksApi = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getShelfByNumber: builder.query({
      query: (shelfNumber: Shelf) =>
        `users/${myUserId}/bookshelves/${shelfNumber}/volumes?key=${APIkey}`,
    }),
    getBookById: builder.query({
      query: (bookId: string) => `volumes/${bookId}?key=${APIkey}`,
    }),
    searchBook: builder.query({
      query: ({ book: book, startIndex: startIndex }) =>
        `volumes?q=${book}&startIndex=${startIndex}&key=${APIkey}`,
    }),
  }),
});

export const {
  useGetShelfByNumberQuery,
  useGetBookByIdQuery,
  useSearchBookQuery,
} = booksApi;
