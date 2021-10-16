import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status:"",
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
      state.status = payload.status;
      state.currentUser=payload.userinfo;
      state.error = ""
      
    },
    fetchUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status
      state.error = payload.message;
    },
  },
});

const { reducer, actions } = userSlice;

export const { fetchUserLoading, fetchUserSuccess, fetchUserFail } = actions;

export default reducer;
