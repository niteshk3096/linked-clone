import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import userSlice from "./user";

const store = configureStore({
  reducer: { user: userSlice.reducer, counter: counterSlice.reducer },
});

export default store;
