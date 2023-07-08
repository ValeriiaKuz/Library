import axios from "axios";

export const baseURL = "https://www.googleapis.com/books/v1/";
export const APIkey = "AIzaSyCVf-Y9wvs5FPqPTCrgBRlUUw2qZuxHdBY";
export const myUserId = "103353390894275802420";
export const bookURL =
  "https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey";
export const bookshelfURL =
  "https://www.googleapis.com/books/v1/users/103353390894275802420/bookshelves/1002/volumes?key=AIzaSyCVf-Y9wvs5FPqPTCrgBRlUUw2qZuxHdBY";
export const searchBookURL =
  "https://www.googleapis.com/books/v1/volumes?q=flowers&key=yourAPIKey";
export const axiosRequest = axios.create({
  baseURL: baseURL,
});
