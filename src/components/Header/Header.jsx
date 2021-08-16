import { auth } from "../firebase-utils/firebase";
import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/icon.svg";
import "./header.scss";
import CartIcon from "../CartIcon/CartIcon";
import Cartdropdown from "../Cart-dropdown/Cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/useSelectore";
import { cartHidden } from "../../redux/cart/cartSelectore";

function Header({ currentUser, history, hidden }) {
  //logging out from current account
  const dologout = () => {
    auth.signOut();
    // setstate({ loggedin: false });
    history.push("/signin");
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <Link className="option" to="/signin" onClick={dologout}>
            Sign out
          </Link>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
        {currentUser && <CartIcon />}
      </div>
      {hidden && <Cartdropdown />}
    </div>
  );
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: cartHidden,
});
export default withRouter(connect(mapStatetoProps)(Header));
