import "./cart-dropdown.scss";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cartAction";
import { withRouter } from "react-router";
import {
  selectaCartItem,
  selectCartItemsCount,
} from "../../redux/cart/cartSelectore";
import { createStructuredSelector } from "reselect";
import CustomButton from "../CustomButton/CustomButton";

const Cartdropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item" />
      {cartItems.length ? (
        cartItems.map((cartitem) => (
          <CartItem key={cartitem.id} item={cartitem} />
        ))
      ) : (
        <span className="empty-cart">Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleHidden());
        }}
      >
        Go to cart
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectaCartItem,
});
export default withRouter(connect(mapStateToProps)(Cartdropdown));
