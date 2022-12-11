import { createSlice } from "@reduxjs/toolkit";
const intialState = {
  mesaageStatus: false,
  message: "",
  severity: "success",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: intialState,
  reducers: {
    enableSnackbar(state, action) {
      (state.mesaageStatus = action.payload.status),
        (state.message = action.payload.message),
        (state.severity = action.payload.severity);
    },
    disableSnackbar(state, action) {
      (state.mesaageStatus = false),
        (state.message = ""),
        (state.severity = "success");
    },
  },
});

export const snackbarAction = snackbarSlice.actions;
export default snackbarSlice;
