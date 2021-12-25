import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginsuccess: (state) => {
      state.isAuth = true;
    },
    logoutsuccess: (state) => {
      state.isAuth = false;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginsuccess, logoutsuccess } = actions;
export default reducer;
