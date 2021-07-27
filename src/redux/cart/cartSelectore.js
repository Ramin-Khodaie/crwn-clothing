import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectaCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const cartHidden = createSelector([selectCart], (cart) => cart.hidden);
export const selectCartItemsCount = createSelector(
  [selectaCartItem],

  (cartItems) =>
    cartItems.reduce(
      (accomulateQuantity, cartitem) => accomulateQuantity + cartitem.quantity,
      0
    )
);

export const cartItemTotal = createSelector([selectaCartItem], (cartItems) =>
  cartItems.reduce(
    (accomulateQuantity, cartitem) =>
      accomulateQuantity + cartitem.quantity * cartitem.price,
    0
  )
);
