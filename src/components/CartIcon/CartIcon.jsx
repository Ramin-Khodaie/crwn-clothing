import { ReactComponent as ShoppingLogo } from "../../assets/images/shopping-bag.svg";
import { toggleHidden } from "../../redux/cart/cartAction";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cartSelectore";
import { createStructuredSelector } from "reselect";

import "./cartIcon.scss";

const CartIcon = ({ toggleHidden, itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingLogo className="shopping-icon" onClick={toggleHidden} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
