import "./Checkout.scss";
import {
  RemoveCartItem,
  AddCartItems,
  DeleteCartItem,
} from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
const Checkout = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(RemoveCartItem(cartItem))}
        >
          &#60;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(AddCartItems(cartItem))}>
          &#62;
        </div>
      </div>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(DeleteCartItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default Checkout;
