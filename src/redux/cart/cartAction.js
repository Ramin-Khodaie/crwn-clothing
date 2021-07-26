import CartActionType from "./cartTypes";

//action which toggle cart to show
export const toggleHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

//action which add cartitem to current state.
export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionType.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const removeOneItem = (item) => ({
  type: CartActionType.REMOVE_ONE_ITEM,
  payload: item,
});
