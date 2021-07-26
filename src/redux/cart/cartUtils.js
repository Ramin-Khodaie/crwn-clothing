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

  return [...cartItems, { ...cartitemtoremove, quantity: 1 }];
};
