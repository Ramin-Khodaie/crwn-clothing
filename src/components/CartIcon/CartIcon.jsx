import { ReactComponent as ShoppingLogo } from "../../assets/images/shopping-bag.svg";
import { handleChangeHidden } from "../../redux/cart/cartAction";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cartSelectore";
import { createStructuredSelector } from "reselect";
import { useDispatch } from "react-redux";

import "./cartIcon.scss";
import { useSelector } from "react-redux";

const CartIcon = ({ itemCount }) => {

  const dispatch = useDispatch();
  // const {cartItem} = useSelector(state => state.cartitem)
  console.log(888,itemCount)
  const toggleDropDown = async () =>{
    await dispatch(handleChangeHidden());
  }
  return (
    <div className="cart-icon">
      <ShoppingLogo className="shopping-icon" onClick={toggleDropDown} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleHidden: () => dispatch(toggleHidden()),
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });
export default (CartIcon);
