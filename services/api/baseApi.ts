import { createApi } from "@reduxjs/toolkit/query/react";
import axiosQuery from "./axiosBaseQuery";

const apiUrl = "https://jsonplaceholder.typicode.com";

export const api = createApi({
  baseQuery: axiosQuery({
    baseUrl: apiUrl,
  }),
  endpoints: () => ({}),
});
