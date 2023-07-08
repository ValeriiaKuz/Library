import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIkey, axiosRequest } from "../API/API";

export const fetchBook = createAsyncThunk(
  "book/fetchBook",
  async (bookId: string) => {
    try {
      const response = await axiosRequest.get(
        `volumes/${bookId}?key=${APIkey}`,
      );
      return response.data.volumeInfo;
    } catch (error) {
      console.error("Error fetching book: ", error);
      throw error;
    }
  },
);
