import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loaderSlice from "./loader";
import userSlice from "./user";
import snackbarSlice from "./snackbar";
import thunkMiddleware from "redux-thunk";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    loader: loaderSlice.reducer,
    snackbar: snackbarSlice.reducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
