import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
  reducerPath: "booksApi",
  tagTypes: ["data"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7290/api/",
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "Books",
      providesTags: (result, err, arg) => {
        return result
          ? [
              ...result.map((ele) => ({ type: "data", id: ele.id })),
              { type: "data", id: "LIST" },
            ]
          : [{ type: "data", id: "LIST" }];
      },
    }),

    getBookById: builder.query({
      query: (id) => `Books/${id}`,
      providesTags: (result, err, arg) => {
        return [{ type: "data", id: arg }];
      },
    }),

    addBooks: builder.mutation({
      query: (body) => ({
        url: "Books",
        method: "POST",
        body,
      }),
      invalidatesTags: (result, err, arg) => {
        return [{ type: "data", id: "LIST" }];
      },
    }),

    updateBooks: builder.mutation({
      query: (data) => {
        const { id, body } = data;
        return {
          url: `Books/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, err, arg) => {
        return [{ type: "data", id: arg.id }];
      },
    }),

    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `Books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, err, arg) => {
        return [{ type: "data", id: "LIST" }];
      },
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
