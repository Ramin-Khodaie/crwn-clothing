import CartActionType from "./cartTypes";
import { addCartItem, removeOnecartItem } from "./cartUtils";

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN: {
      return {
        ...state,
        hidden: !state.hidden,
      };
    }
    case CartActionType.ADD_ITEM: {
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    }
    case CartActionType.REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartitem) => cartitem.id !== action.payload.id
        ),
      };
    }
    case CartActionType.REMOVE_ONE_ITEM: {
      return {
        ...state,
        cartItems: removeOnecartItem(state.cartItems, action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
