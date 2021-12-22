import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/icon.svg";
import "./header.scss";
import CartIcon from "../CartIcon/CartIcon";
import Cartdropdown from "../Cart-dropdown/Cart-dropdown";
import { useTheme } from "../../context/theme/useTheme";

function Header({ history }) {
  const { message, currentUser } = useSelector((state) => state.currentUser);

  const { hidden } = useSelector((state) => state.cartitem);
  const { cartItems } = useSelector((state) => state.cartitem);
  const { mode, handleToggle } = useTheme();
  console.log(455, cartItems);
  //logging out from current account
  // const dologout = () => {
  //   auth.signOut();
  //   // setstate({ loggedin: false });
  //   history.push("/signin");
  // };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" style={{ color: mode ? "#fff" : "#222" }} />
      </Link>

      <div className="options">
        <Link
          className="option"
          to="/shop"
          style={{ color: mode ? "#fff" : "#222" }}
        >
          Shop
        </Link>
        <Link
          className="option"
          to="/shop"
          style={{ color: mode ? "#fff" : "#222" }}
        >
          Contact
        </Link>
        {currentUser ? (
          <Link
            className="option"
            to="/signin"
            style={{ color: mode ? "#fff" : "#222" }}
          >
            Sign out
          </Link>
        ) : (
          <Link
            className="option"
            to="/signin"
            style={{ color: mode ? "#fff" : "#222" }}
          >
            Sign in
          </Link>
        )}
        {!currentUser && <CartIcon itemCount={cartItems && cartItems.length} />}
      </div>
      {hidden && <Cartdropdown />}
    </div>
  );
}

export default withRouter(Header);
