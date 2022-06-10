import { configureStore } from "@reduxjs/toolkit";
import post from "./features/postsSlice";

export const store = configureStore({
  reducer: {
    post,
  },
});
