import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  products: "",
  errro: "",
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    fecthProductsLoading: (state) => {
      state.isLoading = true;
    },
    fecthProductsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      state.errro = "";
    },
    fetchProductsError: (state, { payload }) => {
      state.isLoading = false;
      state.errro = payload;
    },
  },
});

const { reducer, actions } = productSlice;

export const {
  fecthProductsLoading,
  fecthProductsSuccess,
  fetchProductsError,
} = actions;

export default reducer;
