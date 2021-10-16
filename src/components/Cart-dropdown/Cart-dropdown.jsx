import "./cart-dropdown.scss";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { handleChangeHidden } from "../../redux/cart/cartAction";
import { withRouter } from "react-router";
import {
  selectaCartItem,
  selectCartItemsCount,
} from "../../redux/cart/cartSelectore";
import { createStructuredSelector } from "reselect";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch,useSelector } from "react-redux";

const Cartdropdown = ({ cartItems, history }) => {

  const {cartItem} = useSelector(state=>state.cartitem)
  const dispatch = useDispatch()
  return (
    <div className="cart-dropdown">
      <div className="cart-item" />
      {cartItem.length ? (
        cartItem.map((c) => (
          <CartItem key={c.id} item={c} />
        ))
      ) : (
        <span className="empty-cart">Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(handleChangeHidden());
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
