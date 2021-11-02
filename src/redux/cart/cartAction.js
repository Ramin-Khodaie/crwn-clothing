import CartActionType from "./cartTypes";
import { togglehidden, cartItems, accItems } from "./cartSlice";

//action which toggle cart to show
// export const handleChangeHidden = () => (dispatch) => {
//   dispatch(togglehidden());
// };

export const handleChangeHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});
//action which add cartitem to current state.
export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});
//action which remove cartitem from current state.
export const removeItemFromCart = (item) => ({
  type: CartActionType.REMOVE_ITEM_FROM_CART,
  payload: item,
});
//remove one item from current state
export const removeOneItem = (item) => ({
  type: CartActionType.REMOVE_ONE_ITEM,
  payload: item,
});

export const addItem2 = (items, itemToAdd) => {
  const exsiting = items.find((item) => item.id === itemToAdd.id);
  if (exsiting) {
    return items.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const accomulateCartItems = (cartItem) => (dispatch) => {
  const x = cartItem.reduce((acc, item) => acc + item.quantity, 0);
  console.log(8888, cartItem);
  dispatch(accItems(cartItem.reduce((acc, item) => acc + item.quantity, 0)));
};
