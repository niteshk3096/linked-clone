import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loaderSlice from "./loader";
import userSlice from "./user";
import thunkMiddleware from "redux-thunk";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    loader: loaderSlice.reducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
