import { createSlice } from "@reduxjs/toolkit";
const intialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState: intialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const loaderAction = loaderSlice.actions;
export default loaderSlice;
