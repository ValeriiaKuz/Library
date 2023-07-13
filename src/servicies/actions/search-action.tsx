import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIkey, axiosRequest } from "../API/API";

export const fetchSearchBooks = createAsyncThunk(
  "search/fetchSearchBook",
  async ({
    book: book,
    startIndex: startIndex,
  }: {
    book: string;
    startIndex: number;
  }) => {
    try {
      const response = await axiosRequest.get(
        `volumes?q=${book}&startIndex=${startIndex}&key=${APIkey}`,
      );
      const books = response.data.items
        ? response.data.items.map((book: { volumeInfo: any; id: string }) => ({
            bookInfo: book.volumeInfo,
            bookId: book.id,
          }))
        : [];
      return { totalItems: response.data.totalItems, books: books };
    } catch (error) {
      console.error("Error searching book: ", error);
      throw error;
    }
  },
);
