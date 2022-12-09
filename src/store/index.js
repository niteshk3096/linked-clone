import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loader";
import userSlice from "./user";

const store = configureStore({
  reducer: { user: userSlice.reducer, loader: loaderSlice.reducer },
});

export default store;
