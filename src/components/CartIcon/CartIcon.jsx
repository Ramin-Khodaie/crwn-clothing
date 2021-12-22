import { ReactComponent as ShoppingLogo } from "../../assets/images/shopping-bag.svg";
import { handleChangeHidden } from "../../redux/cart/cartAction";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cartSelectore";
import { createStructuredSelector } from "reselect";
import { useDispatch } from "react-redux";

import "./cartIcon.scss";
import { useSelector } from "react-redux";
import { useTheme } from "../../context/theme/useTheme";

const CartIcon = ({ itemCount }) => {
  const { mode } = useTheme();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartitem);
  const selectedItemsCount = (items) => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  };
  const total = selectedItemsCount(cartItems);
  const toggleDropDown = () => {
    console.log(888, "hehre");
    dispatch(handleChangeHidden());
  };
  return (
    <div className="cart-icon">
      <ShoppingLogo
        className="shopping-icon"
        onClick={toggleDropDown}        
      />
      <span className="item-count">{total}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleHidden: () => dispatch(toggleHidden()),
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });
export default CartIcon;
