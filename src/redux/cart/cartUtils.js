/**
 *
 * @param {array of object} cartItems
 * @param {onbject} cartitemtoadd
 * @returns array of object which quantity of specified cartitem has been increased.
 * this function will add one time to quantity of specified cartitem.
 */

export const addCartItem = (cartItems, cartitemtoadd) => {
  const existing = cartItems.find(
    (cartItem) => cartItem.id === cartitemtoadd.id
  );
  if (existing) {
    return cartItems.map((cartitem) =>
      cartitem.id === cartitemtoadd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }

  return [...cartItems, { ...cartitemtoadd, quantity: 1 }];
};

/**
 * 
 * @param {array of object} cartItems 
 * @param {object} cartitemtoremove 
 * @returns array of object
 *  
 * if count of item in state is more than 1 then this action will remove one of them,
    but if if it is equal to 1 then action will remove the item at all.
 */
export const removeOnecartItem = (cartItems, cartitemtoremove) => {
  console.log(4300, cartItems, cartitemtoremove);
  const existing = cartItems.find(
    (cartitem) => cartitem.id === cartitemtoremove.id
  );
  if (existing.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartitemtoremove.id);
  }
  if (existing) {
    return cartItems.map((cartitem) =>
      cartitem.id === cartitemtoremove.id
        ? { ...cartitem, quantity: cartitem.quantity - 1 }
        : cartitem
    );
  }

  // return [...cartItems, { ...cartitemtoremove, quantity: 1 }];
};
