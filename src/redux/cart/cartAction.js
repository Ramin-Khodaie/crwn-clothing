import CartActionType from "./cartTypes";
import { togglehidden } from "./cartSlice";

//action which toggle cart to show
export const handleChangeHidden = () => dispatch=> {
  console.log(555,"jfaskdfj;")
  dispatch(togglehidden());
};

// //action which add cartitem to current state.
// export const addItem = (item) => ({
//   type: CartActionType.ADD_ITEM,
//   payload: item,
// });
// //action which remove cartitem from current state.
// export const removeItemFromCart = (item) => ({
//   type: CartActionType.REMOVE_ITEM_FROM_CART,
//   payload: item,
// });
// //remove one item from current state
// export const removeOneItem = (item) => ({
//   type: CartActionType.REMOVE_ONE_ITEM,
//   payload: item,
// });

