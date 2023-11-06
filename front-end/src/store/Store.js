import { configureStore } from "@reduxjs/toolkit";
import booksApi from "../features/api/apiSlice";

export const store=configureStore({
    reducer:{
        [booksApi.reducerPath]:booksApi.reducer
    },
    middleware:getMiddleWare=>getMiddleWare().concat(booksApi.middleware)
})