import { ReactComponent as ShoppingLogo } from "../../assets/images/shopping-bag.svg";
import { toggleHidden } from "../../redux/cart/cartAction";
import { connect } from "react-redux";

import "./cartIcon.scss";

const CartIcon = ({ toggleHidden }) => {
  return (
    <div className="cart-icon">
      <ShoppingLogo className="shopping-icon" onClick={toggleHidden} />
      <span className="item-count">34</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
