import { createStructuredSelector } from "reselect";
// import {
//   selectaCartItem,
//   selectCartItemsCount,
//   cartItemTotal,
// } from "../../redux/cart/cartSelectore";

import { connect } from "react-redux";

import "./checkout.scss";
import Chekout from "../../components/Checkout/Checkout";
import StripButton from "../../components/StripButton/Strip-button";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { cartItems } = useSelector((state) => state.cartitem);

  const totalCartItems = (items) =>(

    items.reduce((acc,item)=>acc + item.quantity * item.price,0)
  )
  

  const total = totalCartItems(cartItems)
  console.log(98, total);
  return (
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
      <div className="total">{ <span>Total:{total}</span> }</div>
      <StripButton price={cartItems.price} />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectaCartItem,
//   Total: cartItemTotal,
// });
export default CheckoutPage;
