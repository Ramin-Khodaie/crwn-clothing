import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeOnecartItem, deleteCartItem } from "./cartUtils";

const initialState = {
  hidden: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartitem",
  initialState: initialState,
  reducers: {
    togglehidden: (state) => {
      state.hidden = !state.hidden;
    },
    AddCartItems: (state, { payload }) => {
      state.cartItems = addCartItem(state.cartItems, payload);
    },
    RemoveCartItem: (state, { payload }) => {
      state.cartItems = removeOnecartItem(state.cartItems, payload);
    },
    DeleteCartItem: (state, { payload }) => {
      state.cartItems = deleteCartItem(state.cartItems, payload);
    },
  },
});

export const {
  togglehidden,
  AddCartItems,
  accItems,
  RemoveCartItem,
  DeleteCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
