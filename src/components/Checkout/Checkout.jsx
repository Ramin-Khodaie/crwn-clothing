import "./Checkout.scss";

import {
  addItem,
  removeItemFromCart,
  removeOneItem,
} from "../../redux/cart/cartAction";
import { connect } from "react-redux";
const Checkout = ({ cartItem, removeItem, addOneItem, removeOneItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => removeOneItem(cartItem)}>
          &#60;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addOneItem(cartItem)}>
          &#62;
        </div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addOneItem: (item) => dispatch(addItem(item)),
  removeOneItem: (item) => dispatch(removeOneItem(item)),
});
export default connect(null, mapDispatchToProps)(Checkout);
