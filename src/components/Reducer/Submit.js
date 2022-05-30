import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  register: {},
};
export const Submit = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      state.register = payload;
    },
  },
});
export const { registerUser } = Submit.actions;

export default Submit.reducer;
