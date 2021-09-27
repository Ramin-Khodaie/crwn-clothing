import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  currentUser: "",
  error: "",
};

const userSlice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {
    fetchUserLoading: (state) => {
      state.isLoading = true;
    },
    fetchUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.currentUser = payload;
    },
    fetchUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { fetchUserLoading, fetchUserSuccess, fetchUserFail } = actions;

export default reducer;
