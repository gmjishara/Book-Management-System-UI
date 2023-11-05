import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "posts",
    }),

    getBookById: builder.query({
      query: (id) => `posts/${id}`,
    }),

    addBooks: builder.mutation({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
    }),

    updateBooks: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `posts/${id}`,
          method: "PUT",
          body,
        };
      },
    }),

    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default booksApi
export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useAddBooksMutation,
  useUpdateBooksMutation,
  useDeleteBooksMutation,
} = booksApi;
