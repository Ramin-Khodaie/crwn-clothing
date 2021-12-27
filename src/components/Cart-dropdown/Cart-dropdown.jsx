import "./cart-dropdown.scss";
import CartItem from "../CartItem/CartItem";

import { withRouter } from "react-router";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { togglehidden } from "../../redux/cart/cartSlice";
const Cartdropdown = ({ history }) => {
  const { cartItems } = useSelector((state) => state.cartitem);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-item" />
      {cartItems.length ? (
        cartItems.map((c) => <CartItem key={c.id} item={c} />)
      ) : (
        <span className="empty-cart">Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(togglehidden());
        }}
      >
        Go to cart
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartitem: selectaCartItem,
// });
export default withRouter(Cartdropdown);
