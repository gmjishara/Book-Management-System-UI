import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7290/api/",
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "Books",
    }),

    getBookById: builder.query({
      query: (id) => `Books/${id}`,
    }),

    addBooks: builder.mutation({
      query: (body) => ({
        url: "Books",
        method: "POST",
        body,
      }),
    }),

    updateBooks: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `Books/${id}`,
          method: "PUT",
          body,
        };
      },
    }),

    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `Books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default booksApi;
export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useAddBooksMutation,
  useUpdateBooksMutation,
  useDeleteBooksMutation,
} = booksApi;
