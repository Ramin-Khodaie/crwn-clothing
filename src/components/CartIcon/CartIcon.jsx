import { ReactComponent as ShoppingLogo } from "../../assets/images/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { togglehidden } from "../../redux/cart/cartSlice";
import "./cartIcon.scss";
import { useSelector } from "react-redux";
import { useTheme } from "../../context/theme/useTheme";

const CartIcon = ({ itemCount }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartitem);
  const selectedItemsCount = (items) => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  };
  const total = selectedItemsCount(cartItems);
  return (
    <div className="cart-icon">
      <ShoppingLogo
        className="shopping-icon"
        onClick={()=>dispatch(togglehidden())}
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
