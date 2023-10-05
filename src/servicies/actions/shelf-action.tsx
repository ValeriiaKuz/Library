import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIkey, axiosRequest, myUserId } from "../API/API";
import { Shelf } from "../types/shelf-types/shelf-types";
//
// export const fetchShelf = createAsyncThunk(
//   "shelf/fetchShelf",
//   async (shelfNumber: Shelf) => {
//     try {
//       const response = await axiosRequest.get(
//         `users/${myUserId}/bookshelves/${shelfNumber}/volumes?key=${APIkey}`,
//       );
//       const books = response.data.items.map(
//         (book: { volumeInfo: any; id: string }) => ({
//           bookInfo: book.volumeInfo,
//           bookId: book.id,
//         }),
//       );
//       return books;
//     } catch (error) {
//       console.error("Error fetching shelf: ", error);
//       throw error;
//     }
//   },
// );
