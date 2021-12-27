import "./checkout.scss";
import Chekout from "../../components/Checkout/Checkout";
import { useSelector } from "react-redux";
import OrderForm from "../../components/OrderForm/OrderForm";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useState } from "react";
const CheckoutPage = () => {
  const { cartItems } = useSelector((state) => state.cartitem);
  const [purchasable, setPerchasable] = useState(false);
  const totalCartItems = (items) =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const togglePurchase = () => {
    setPerchasable(!purchasable);
  };
  const total = totalCartItems(cartItems);
  return (
    <>
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
        <div className="total">{<span>Total:{total}</span>}</div>
        <CustomButton onClick={() => togglePurchase()}>
          {!purchasable ? "Continue" : "Cancel"}
        </CustomButton>
      </div>
      {purchasable && <OrderForm />}
    </>
  );
};
export default CheckoutPage;
