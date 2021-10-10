import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  message: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createUserLoading: (state) => {
      state.isLoading = true;
    },
    createUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    },
    createUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { createUserLoading, createUserSuccess, createUserFail } = actions;

export default reducer;
