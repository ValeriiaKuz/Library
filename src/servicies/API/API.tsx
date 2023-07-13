import axios from "axios";

export const baseURL = "https://www.googleapis.com/books/v1/";
export const APIkey = "AIzaSyCVf-Y9wvs5FPqPTCrgBRlUUw2qZuxHdBY";
export const myUserId = "103353390894275802420";
export const axiosRequest = axios.create({
  baseURL: baseURL,
});
