import { createSlice } from "@reduxjs/toolkit";
const intialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    increament(state, action) {
      state.counter = state.counter + action.payload;
    },
    decreament(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice;
