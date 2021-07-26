import { createStructuredSelector } from "reselect";
import {
  selectaCartItem,
  selectCartItemsCount,
  cartItemTotal,
} from "../../redux/cart/cartSelectore";

import { connect } from "react-redux";

import "./checkout.scss";
import Chekout from "../../components/Checkout/Checkout";

const CheckoutPage = ({ cartItems, Total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartitem) => (
      <Chekout cartItem={cartitem} />
    ))}
    <div className="total">
      <span>Total:{Total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectaCartItem,
  Total: cartItemTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
