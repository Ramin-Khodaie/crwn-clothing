import CartActionType from "./cartTypes";
import { togglehidden, cartItems } from "./cartSlice";

//action which toggle cart to show
export const handleChangeHidden = () => (dispatch) => {
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

export const addItem = (items, itemToAdd) => (dispatch) => {
  const exsiting = items.find((item) => item.id === itemToAdd.id);

  if (exsiting) {
    items.map((item) => {
      if (item.id === itemToAdd.id) {
        console.log(6666, item);
        return dispatch(cartItems({ ...item, quantity: item.quantity + 1 }));
      } else {
        return dispatch(cartItems(item));
      }
    });
  }

  console.log(222, itemToAdd, exsiting);
  return dispatch(cartItems([...items, { ...itemToAdd, quantity: 1 }]));
};

// export const accomulateCartItems = cartItem =>dispatch=>{
//  dispatch(cartItems( cartItem.reduce((acc,item)=>acc + item.quantity,0)))
// }
