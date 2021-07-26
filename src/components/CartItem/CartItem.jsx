import "./cartitem.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-detail">
      <span className="name">{name}</span>
      <span>
        {quantity} x {price}
      </span>
    </div>
  </div>
);

export default CartItem;
